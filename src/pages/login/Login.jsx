import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/unsplashnt.svg";
import { Eye, EyeOff } from "tabler-icons-react";
import { Link } from "react-router-dom";
import { getUser } from "../../features/loginSlice/loginSlice";
import axios from "axios";
import { USER_URI } from "../../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handlerUser = (e) => {
    setLogin({ ...login, email: e.target.value });
  };
  const handlerPassword = (e) => {
    setLogin({ ...login, password: e.target.value });
  };

  const handlerLogin = async () => {
    try {
      const response = await toast.promise(axios.post(USER_URI, login), {
        pending: "Promise is pending",
        success: "Login successfully 👌",
        error: "Error. Please, verify the email or password 🤯",
      });

      dispatch(getUser(response.data.getUser));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="layout credential">
      <ToastContainer />
      <Link to="/">
        <img src={logo} alt="unsplashnt" />
      </Link>
      <h2 className="p-2 font-semibold text-xl">¡Welcome to Unspashn`t!</h2>
      <div className="flex items-center justify-center flex-col  h-[40vh] w-[40vw]">
        <input
          value={login.email}
          onChange={(e) => handlerUser(e)}
          className="border w-[80%] p-2 mb-4 rounded"
          placeholder="Email"
        />
        <div className="w-full flex items-center justify-center flex-col relative">
          <input
            value={login.password}
            onChange={(e) => handlerPassword(e)}
            className="border w-[80%] p-2 rounded"
            placeholder="Password"
            type={open === false ? "password" : ""}
          />
          <div className="absolute mt-[-38px] ml-[420px]">
            {open === true ? (
              <button onClick={() => setOpen(!open)}>
                <Eye color="grey" />
              </button>
            ) : (
              <button onClick={() => setOpen(!open)}>
                <EyeOff color="grey" />
              </button>
            )}
          </div>
          <button className="font-light text-xs mb-4  p-2">
            Did you forget your password?
          </button>
        </div>
        <button
          onClick={() => handlerLogin()}
          className="text-white bg-black w-[80%] p-2 rounded"
        >
          Sign in
        </button>
      </div>

      <div className=" flex items-center p-2">
        <p className="font-light text-xs">you don`t have an account yet?</p>
        <Link to={"/register"} className="p-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
