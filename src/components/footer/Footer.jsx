const Footer = () => {
  return (
    <div className="w-full h-[20vh] border-t flex items-center justify-center flex-col ">
      <a
        target="_blank"
        href="https://nahuelcempellin.vercel.app"
        rel="noreferrer"
        className="text-sm text-gray-400 font-light"
      >
        {"Developed with ❤️ by Nahuel Cempellin"}
      </a>
      <p className="text-sm text-gray-400 font-light">
        {"It is only a project for educational purposes "}
      </p>
    </div>
  );
};

export default Footer;
