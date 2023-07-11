import { Trash } from "tabler-icons-react";
import "./animations.css";

const HomeCards = ({ url, title, descrip }) => {
  return (
    <a className="grid-gallery__item" href="#" id="banish-box">
      <div
        className="flex  items-center justify-between p-1 absolute hidden"
        id="banish"
      >
        <div className="bg-red-500 p-1 rounded">
          <Trash color="white" />
        </div>
      </div>
      <img className="grid-gallery__image" src={url} />
      <div
        className="absolute mt-[-60px] p-1 flex flex-col items-start justify-center hidden"
        id="banish"
      >
        <p className="text-white">{title}</p>
        <p className=" text-white">{descrip.slice(0, 20)}</p>
      </div>
    </a>
  );
};

export default HomeCards;
