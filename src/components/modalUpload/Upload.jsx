import { CloudUpload } from "tabler-icons-react";

const Uploadd = () => {
  return (
    <>
      <div className="w-[100%] p-2 flex items-center justify-center flex-col border border-dashed rounded">
        <CloudUpload size={50} strokeWidth={1} color="gray" />
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          Upload or attach files
        </p>
      </div>

      <div className="p-2 w-full flex items-center justify-center flex-col">
        <p>Or</p>

        <input placeholder="URL:" className="border w-full p-1 rounded" />
      </div>
    </>
  );
};

export default Uploadd;
