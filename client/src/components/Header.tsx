import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "@/redux/slices/api";
import { handleError } from "@/utils/handleError";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";

export default function Header() {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateIsLoggedIn(false))
      dispatch(updateCurrentUser({}))
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">DevCompiler</h2>
      </Link>
      <ul className=" flex gap-2">
        <li>
          <Link to="/compiler">
            <Button variant="secondary">Compiler</Button>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Button loading={isLoading} onClick={handleLogout} variant="destructive">
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <Button variant="blue">Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Button variant="green">Signup</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
