import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const SearchInput: React.FC = () => {
  const [keywords, setKeywords] = useState("");
  const location = useLocation();
  // const { path } = useParams();
  const searchKeyword = location.search.split("?keyword=")[1];

  // console.log(path);
  const history = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    history({
      pathname: "/search?keyword=" + keywords,
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none"
          value={keywords}
          defaultValue={searchKeyword}
          onChange={e => setKeywords(e.target.value)}
        />
      </form>
    </div>
  );
};
