import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout primary flex items-center justify-between flex-col ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
