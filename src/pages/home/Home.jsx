import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_PHOTOS } from "../../constants/constants";

import axios from "axios";
import HomeCards from "./cards/HomeCards";

const Home = () => {
  const { login } = useSelector((state) => state);

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const response = async () => {
      const own = login.user.map((el) => el._id);
      const owner = own[0];

      const res = await axios.get(USER_PHOTOS + owner);
      setPhotos(res.data);
    };

    response();
  }, [login, photos]);

  return (
    <div className="layout primary flex flex-col justify-center items-center">
      <div className="w-full p-4 flex items-center justify-start">
        {login.user.map((el, i) => {
          return (
            <h1 key={i} className="font-semibold text-2xl">{`Hi! ${
              el.fristname + " " + el.lastname
            }`}</h1>
          );
        })}
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
