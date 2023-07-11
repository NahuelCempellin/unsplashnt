import logo from "../../assets/unsplashnt.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-around  w-[180px] p-2">
      <img alt="logo" src={logo} />
      <h2 className=" text-lg font-semibold">Unsplashn`t</h2>
    </Link>
  );
};

export default Logo;
