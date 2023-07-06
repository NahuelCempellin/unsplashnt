import { useState } from "react";
import logo from "../../assets/unsplashnt.svg";
import { Eye, EyeOff } from "tabler-icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout credential">
      <Link to="/">
        <img src={logo} alt="unsplashnt" />
      </Link>
      <h2 className="p-2 font-semibold text-xl">¡Welcome to Unspashn`t!</h2>
      <div className="flex items-center justify-center flex-col  h-[40vh] w-[40vw]">
        <input className="border w-[80%] p-2 mb-4 rounded" placeholder="User" />
        <div className="w-full flex items-center justify-center flex-col relative">
          <input
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
        <button className="text-white bg-black w-[80%] p-2 rounded">
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
