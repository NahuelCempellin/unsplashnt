import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Upload, CloudUpload } from "tabler-icons-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { UPLOAD_PHOTOS } from "../../constants/constants";

export default function Modal() {
  const { login } = useSelector((state) => state);

  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = useState({
    name: "",
    title: "",
    descrip: "",
    url: "",
    tags: [],
    // owner: login.user[0]._id,
  });
  const dataHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const tagsHandler = (e) => {
    e.preventDefault();
    setData({ ...data.data.url.push(e.target.value) });
  };

  const handlerSubmit = async () => {
    try {
      const response = await toast.promise(axios.post(UPLOAD_PHOTOS, data), {
        pending: "Promise is pending",
        success: "Upload successfully 👌",
        error: "Error 🤯",
      });

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        className="bg-[#1cb530] p-2 rounded text-white flex items-center justify-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add photo
        <Upload color="white" size={15} className="ml-1 text" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[80%] my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between flex-col p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="pt-2 text-gray-400 font-light">
                    Add new photos
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto  ">
                  <div className="w-[100%] p-2 flex items-center justify-center flex-col border border-dashed rounded">
                    <CloudUpload size={50} strokeWidth={1} color="gray" />
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Upload or attach files
                    </p>
                  </div>

                  <div className="p-1 w-full flex items-center justify-center flex-col">
                    <p>Or</p>

                    <input
                      onChange={(e) => dataHandler(e)}
                      name="url"
                      placeholder="URL:"
                      className="border w-[100%] p-1 rounded"
                    />
                  </div>

                  <div className=" w-full p-1 flex items-center justify-center flex-col">
                    <div className="w-full flex justify-around items-center">
                      <input
                        onChange={(e) => dataHandler(e)}
                        name="name"
                        placeholder="Name"
                        className="w-[50%] p-1 border rounded mr-2"
                      />
                      <input
                        onChange={(e) => dataHandler(e)}
                        name="title"
                        placeholder="Title"
                        className="w-[50%] p-1 border rounded"
                      />
                    </div>
                    <select
                      onChange={(e) => tagsHandler(e)}
                      name="tags"
                      className="p-1 w-full  rounded border mt-1 mb-1"
                    >
                      <option value="Tags">Tags</option>
                    </select>
                    <textarea
                      onChange={(e) => dataHandler(e)}
                      name="descrip"
                      placeholder="Description"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b justify-around">
                  <button
                    className="text-red-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-[#1cb530] "
                    type="button"
                    onClick={() => handlerSubmit()}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
