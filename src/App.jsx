import "./App.css";
import { Search } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const usuario = JSON.parse(user);
    if (usuario) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="layout primary flex items-center justify-center">
      <header className="video-container">
        <div className="w-[80%] h-[50vh] flex items-start flex-col justify-center p-4  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border ">
          <h1 className="text-3xl font-semibold w-[60%]">
            You not only discover photos, but projects, dreams, visions...
          </h1>

          <div className="w-full pt-2 relative">
            <input
              placeholder="Search images..."
              className="w-[50%] p-2 rounded"
            />

            <div className="absolute ml-[525px] mt-[-32px]">
              <Search color="gray" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light p-2">
              You can search by tags as:{" "}
              {"'flowers', " + "'cities', " + "'technologies', "}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
