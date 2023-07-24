import React, { useEffect, useState } from "react";
import { Trash } from "tabler-icons-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DELETE } from "../../constants/constants";

export default function ModalDelete({ _id }) {
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = useState({
    _id: _id,
    user: "",
    password: "",
  });

  const user = localStorage.getItem("user");
  const us = JSON.parse(user);

  useEffect(() => {
    setData({ ...data, user: us.fristname });
  }, [user.password]);

  const handlerSubmit = async () => {
    try {
      const response = await toast.promise(axios.delete(DELETE, data), {
        pending: "Promise is pending",
        success: "Upload successfully 👌",
        error: "Error 🤯",
      });

      console.log(response);

      console.log(data);

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        className="bg-red-500 p-1 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <Trash color="white" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50%] my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between flex-col p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="pt-2 text-gray-400 font-light">
                    Delete photo
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
                <div className="relative p-6 flex items-start justify-around flex-col ">
                  <label>Are you sure?</label>
                  <input
                    placeholder="Enter your password..."
                    className="border rounded p-2 w-[80%]"
                    type="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b justify-around">
                  <button
                    className="text-gray-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 "
                    type="button"
                    onClick={() => handlerSubmit()}
                  >
                    Delete
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
