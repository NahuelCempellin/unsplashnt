import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-[98%] flex items-center justify-between p-2 border-b">
      <Logo />

      <div className="p-4">
        <Link to="/login" className="text-sm font-light text-gray-400">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
