import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_PHOTOS } from "../../constants/constants";

import axios from "axios";
import HomeCards from "./cards/HomeCards";

const Home = () => {
  const { login } = useSelector((state) => state);
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const response = async () => {
      const usuario = localStorage.getItem("user");
      const us = JSON.parse(usuario);
      const own = us._id;
      setData(us);

      const res = await axios.get(USER_PHOTOS + own);
      setPhotos(res.data);
    };

    response();
  }, [login]);

  return (
    <div className="layout primary flex flex-col justify-center items-center">
      <div className="w-full p-4 flex items-center justify-start">
        {data && (
          <h1 className="font-semibold text-2xl">{`Hi! ${
            data.fristname + " " + data.lastname
          }`}</h1>
        )}
      </div>
      <div className="grid-gallery">
        {photos &&
          photos.map((el, i) => {
            return (
              <HomeCards
                key={i}
                title={el.title}
                descrip={el.descrip}
                url={el.url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
