import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import { useState } from "react";

interface IFavProps {
  id: string;
  is_fav: boolean;
}

export const Fav: React.FC<IFavProps> = ({ id, is_fav }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="flex justify-end space-x-2 font-semibold text-gray-900 leading-8">
        {/* <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded">
          즐겨찾기
        </button> */}

        {toggle ? (
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded"
            onClick={() => {
              setToggle(!toggle);
              dispatch(toggleFav(id));
            }}
          >
            팔로잉 취소
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded"
            onClick={() => {
              setToggle(!toggle);
              dispatch(toggleFav(id));
            }}
          >
            팔로잉
          </button>
        )}

        {/* <span className="tracking-wide"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button></span> */}
      </div>
    </div>
  );
};
