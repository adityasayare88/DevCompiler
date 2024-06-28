import mongoose from "mongoose";
interface IUserSchema {
  username:string
  email:string
  password:string
  picture:string
  savedCodes:Array<mongoose.Types.ObjectId>
}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: String,
      default:
        "https://www.google.com/imgres?q=default%20user%20image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F024%2F983%2F914%2Foriginal%2Fsimple-user-default-icon-free-png.png&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F24983914-simple-user-default-icon&docid=xOX-zJXjtv8YNM&tbnid=nHnt9WA4x4PXNM&vet=12ahUKEwjc6LL2zfuGAxXJS2wGHWP_CDQQM3oECDEQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjc6LL2zfuGAxXJS2wGHWP_CDQQM3oECDEQAA",
    },
    savedCodes: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
