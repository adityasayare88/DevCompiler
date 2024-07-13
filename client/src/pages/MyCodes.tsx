import { useGetMyCodesQuery } from "@/redux/slices/api";

export default function MyCodes() {
  const {data} = useGetMyCodesQuery();
  console.log(data);
  return <div>My Codes</div>;
}
