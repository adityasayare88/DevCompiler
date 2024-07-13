import { Request, Response } from "express";
import { Code } from "../models/Code";
import { fullCodeType } from "../types/compilerTypes";
import { AuthRequest } from "../middlewares/verifyToken";
import { User } from "../models/User";

export const saveCode = async (req: Request, res: Response) => {
  const fullCode: fullCodeType = req.body;

  let ownerName = "Anonymous";
  let ownerInfo = undefined;
  if (req.params._id) {
    const user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).send({ message: "User not Found ⛔" });
    }
    ownerName = user?.username;
    ownerInfo = user._id;
  }
  if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
    return res.status(400).send({ message: "Code cannot be blank 🤷‍♂️" });
  }
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
      ownerName: ownerName,
      ownerInfo: ownerInfo,
    });
    return res.status(201).send({ url: newCode._id, status: "saved!" });
  } catch (error) {
    return res.status(500).send({ message: "Error saving Code", error });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  try {
    const existingCode = await Code.findById(urlId);
    if (!existingCode) {
      return res.status(404).send({ message: "Code not Found" });
    }
    return res.status(200).send({ fullCode: existingCode.fullCode });
  } catch (error) {
    return res.status(500).send({ message: "Error loading Code", error });
  }
};
