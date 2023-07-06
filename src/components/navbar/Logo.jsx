import logo from "../../assets/unsplashnt.svg";

const Logo = () => {
  return (
    <div className="flex items-center justify-around  w-[180px] p-2">
      <img alt="logo" src={logo} />
      <h2 className=" text-lg font-semibold">Unsplashn`t</h2>
    </div>
  );
};

export default Logo;
