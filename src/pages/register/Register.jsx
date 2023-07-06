import { useState } from "react";
import logo from "../../assets/unsplashnt.svg";
import { Eye, EyeOff } from "tabler-icons-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout credential">
      <Link to="/">
        <img src={logo} alt="unsplashnt" />
      </Link>
      <h2 className="p-2 font-semibold text-xl">¡Join to Unsplashn`t!</h2>
      <div className="flex items-center justify-center flex-col  h-[40vh] w-[40vw]">
        <div className="w-full flex items-center justify-center flex-col relative">
          <div className="w-[80%] flex items-center justify-between mb-4">
            <input className="border w-[48%] p-2 rounded" placeholder="Name" />
            <input
              className="border w-[48%] p-2 rounded"
              placeholder="Lastname"
            />
          </div>

          <input
            className="border w-[80%] p-2 mb-4 rounded"
            placeholder="User"
          />

          <input
            className="border w-[80%] p-2 mb-4 rounded"
            placeholder="Mail"
          />

          <input
            className="border w-[80%] p-2 rounded"
            placeholder="Password"
            type={open === false ? "password" : ""}
          />
          <div className="absolute mt-[150px] ml-[420px]">
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
          <div className="font-light text-xs mb-4  p-2"></div>
        </div>
        <button className="text-white bg-black w-[80%] p-2 rounded">
          Register
        </button>
      </div>

      <div className=" flex items-center p-2">
        <p className="font-light text-xs">you already have an account?</p>
        <Link className="p-2" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
