import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const Search = ({onOpen}) => {
  return (
    <div className="relative flex flex-grow items-center gap-2">
      <FaSearch className="ml-2 text-white text-2xl absolute"/>
      <input
          type="text"
          className=" flex-grow h-10 rounded-md border border-white bg-transparent text-white pl-10"/>
      <div>
        <FaCirclePlus onClick={onOpen} className="text-white text-3xl cursor-pointer"/>
      </div>
    </div>
  );
};

export default Search;
