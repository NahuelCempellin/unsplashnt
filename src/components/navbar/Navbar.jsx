import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/loginSlice/loginSlice";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Menu2 } from "tabler-icons-react";
import Modal from "../modalUpload/ModalUpload";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  const usuario = localStorage.getItem("user");
  const data = JSON.parse(usuario);

  useEffect(() => {
    if (data) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [data]);

  const logout = () => {
    dispatch(logoutUser("logout"));

    navigate("/");
  };

  return (
    <div className="w-[98%] flex items-center justify-between p-2 border-b">
      {!isAuth ? (
        <Logo />
      ) : (
        <div className="w-[70%] pt-2 flex items-center justify-between max-[800px]:w-[80%]">
          <Logo />
          <Searchbar />
        </div>
      )}

      {!isAuth ? (
        <div className="p-4">
          <Link to="/login" className="text-sm font-light text-gray-400 mr-6">
            Login
          </Link>

          <Link to="/register" className="text-sm font-light text-gray-400">
            Register
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-between  w-[30%] sm:w-[25%] max-[800px]:justify-end">
          <div className="hidden max-[800px]:flex">
            <Menu2 />
          </div>
          <div className="w-[100%] flex items-center justify-between max-[800px]:hidden">
            <div>
              <Modal />
            </div>
            {data && <button onClick={() => logout()}>{"Logout"}</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
