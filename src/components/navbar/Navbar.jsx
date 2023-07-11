import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/loginSlice/loginSlice";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Upload, Search } from "tabler-icons-react";
import Modal from "../modalUpload/ModalUpload";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const { login } = useSelector((state) => state);
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
      {isAuth ? (
        <Logo />
      ) : (
        <div className="w-[50%] pt-2 relative flex items-center justify-between">
          <Logo />
          <input
            placeholder="Search images..."
            className="w-[50%] p-2 rounded border"
          />

          <div className="absolute ml-[665px] mt-[-5px]">
            <Search color="gray" />
          </div>
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
        <div className="flex items-center justify-between  w-[20%]">
          <div>
            <Modal />
          </div>
          {data && <button onClick={() => logout()}>{data.fristname}</button>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
