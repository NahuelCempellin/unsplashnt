import { Search } from "tabler-icons-react";

const Searchbar = () => {
  return (
    <div className="relative border rounded flex items-center justify-between w-[70%] max-[800px]:ml-5 ">
      <input
        placeholder="      Search images..."
        className="w-[100%] p-2 rounded "
      />

      <div className="absolute mt-[-5px] ml-2 ">
        <Search color="gray" size={20} />
      </div>
    </div>
  );
};

export default Searchbar;
