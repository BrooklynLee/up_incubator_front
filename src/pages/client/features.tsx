import { url } from "inspector";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../../components/feature";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getFeatures } from "../../redux/featuresSlice";

interface IFormProps {
  searchTerm: string;
}

// export const Features = ({ getFeatures, rooms, page }: any) => {
export const Features = () => {
  const [features, setFeatures] = useState({ results: [] });
  const [tags, setTags] = useState({ results: [] });
  // const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [tagQuery, setTagQuery] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    // const result = await axios.get("/api/v1/features")
    // console.log("/api/v1/features" + "/?search=" + keywords)
    const result = await axios.get("/api/v1/features" + "/?search=" + keywords);
    // const tag_result = await axios.get("/api/v1/tags/")
    setFeatures(result.data);
    // setTags(tag_result.data);
    setLoading(false);
  };

  // 검색 API 확장: useForm(1): useForm은 두번 호출해야 한다...;
  // const onSearchSubmit = () => {
  //     const { searchTerm } = getValues();
  //     setKeywords(searchTerm)
  //     console.log(searchTerm)
  //     fetchData()
  // };

  // 검색 API 확장: useForm(2): useForm은 두번 호출해야 한다...;
  // const { register, handleSubmit, getValues } = useForm<IFormProps>();

  // 검색 API 일반: 활용 시 이용되는 코드
  const handleSubmit = (e: any) => {
    console.log(keywords);
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //     getFeatures();
  // }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <div className="px-12">
        <div className="relative">
          {/* Search Component */}
          <div className="relative">
            {/* useForm 용도 */}
            {/* <form onSubmit={handleSubmit(onSearchSubmit)}> */}

            {/* 단순 필터 */}
            {/* <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search..." className="focus:ring-2 focus:ring-blue-500 focus:outline-none pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" onChange={e => setKeywords(e.target.value)} /> */}

            {/* 검색 API 일반:  활용 시 */}
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
              {/* useForm(3): useForm은 두번 호출해야 한다...; */}
              {/* <input type="text" placeholder="Search..." className="focus:ring-2 focus:ring-blue-500 focus:outline-none pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" {...register("searchTerm")} /> */}
              <input
                type="text"
                placeholder="Search..."
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
              />
            </form>
          </div>

          <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              추천
            </li>
            {features?.results
              // .filter((c: any) => {
              //     if (keywords === "") {
              //         return c
              //     }
              //     else if (c.name.includes(keywords)) {
              //         return c
              //     }
              // })
              .map((c: any) => {
                if (c.is_recommend === true && c.is_active === true) {
                  return (
                    <Feature
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      desc={c.desc}
                      feature_type={c.feature_type}
                      key_type={c.key_type}
                      status_type={c.status_type}
                      tag={c.tag}
                      database_name={c.database_name}
                      table_name={c.table_name}
                      isFav={c.is_fav}
                    />
                  );
                }
              })}
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              일반
            </li>
            {features?.results
              // .filter((c: any) => {
              //     if (keywords === "") {
              //         return c
              //     }
              //     else if (c.name.includes(keywords.toLowerCase())) {
              //         return c
              //     }
              // })
              .map((c: any) => {
                if (c.is_recommend === false && c.is_active === true) {
                  return (
                    <Feature
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      desc={c.desc}
                      feature_type={c.feature_type}
                      key_type={c.key_type}
                      status_type={c.status_type}
                      tag={c.tag}
                      database_name={c.database_name}
                      table_name={c.table_name}
                    />
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
