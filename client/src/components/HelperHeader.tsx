import { Button } from "./ui/button";

export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
        <div className="__btn_container"></div>
        <Button>Save</Button>
        <Button>Share</Button>
      HelperHeader
    </div>
  );
}
