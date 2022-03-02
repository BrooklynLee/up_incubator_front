import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import { SwaggerViewer } from "../../components/swagger";
import { DataInfo } from "../../components/data-info";
import { CsvReader } from "../../components/csv-reader";
import { useDispatch } from "react-redux";
import { Fav } from "../../components/fav";
import { Haappy } from "../../components/myResponsiveBullet";
import { Content } from "../../components/content";
import { PathMatch, Route, Routes, useMatch } from "react-router-dom";
import Price from "../../components/price";
import Chart from "../../components/chart";
import TabComponents from "../../components/tab";
import { Navigate } from "react-router-dom";

export const Feature = () => {
  // const params = useParams<IFeatureParams>();

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const [owner, setOwner] = useState({});
  const [type, setType] = useState<any>({});
  // const priceMatch = useMatch("/:id/price");
  // const priceMatch = useMatch("/:id/price");
  const priceMatch: PathMatch<"id"> | null = useMatch("features/:id/price");
  const chartMatch: PathMatch<"id"> | null = useMatch("features/:id/chart");
  // const chartMatch = useMatch("/:id/chart");
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("/api/v1/features/" + id);
      setData(result.data);
      setType(result.data.feature_type);
      setLoading(false);
      console.log(priceMatch);
      console.log(chartMatch);
    };
    fetchData();
  }, [id]);

  return (
    <div className="post-view-wrapper bg-gray-100 bg-auto">
      {isLoading ? (
        <div>불러오는 중 ...</div>
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto mt-8">
            <div className="px-12 ">
              <div className="w-full mx-2 py-4">
                {/* <!-- Upper Side --> */}
                <Fav key={data.id} id={data.id} is_fav={data.is_fav} />
                {/* <!-- Feature Info Section --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="tracking-wide">1. 기본 정보</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid grid-cols-1 text-sm">
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 col-span-1 font-semibold">
                          UP 이름
                        </div>
                        <div className="px-4 py-2 col-span-5">{data?.name}</div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 col-span-1 font-semibold">
                          타입
                        </div>
                        <div className="px-4 py-2">
                          {data.feature_type
                            ? data.feature_type.type_name
                            : "haha"}
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 font-semibold">
                          데이터 설명
                        </div>
                        <div className="px-4 py-2 col-span-5">{data?.desc}</div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 col-span-1 font-semibold">
                          태그
                        </div>
                        <div className="px-4 py-2">
                          {data.tag
                            ? data.tag.map((item: any) => {
                                return (
                                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                    <a href={`/search?tag=${item.id}`}>
                                      {item.name}
                                    </a>
                                  </span>
                                );
                              })
                            : "지정된 태그가 없습니다."}
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 col-span-1 font-semibold">
                          담당자
                        </div>
                        <div className="px-4 py-2">
                          {data.user ? data.user.username : "haha"}
                        </div>
                        {/* ({data.created_at})</div> */}
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 font-semibold">참고 링크</div>

                        <div className="px-4 py-2 col-span-5">
                          <a
                            href={data.link}
                            className="text-blue-400 font-semibold"
                          >
                            링크
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 font-semibold">적재 타입</div>
                        <div className="px-4 py-2 col-span-5">
                          {data.status_type
                            ? data.status_type.status_type
                            : "gg"}
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="px-4 py-2 font-semibold">집계 기준</div>
                        <div className="px-4 py-2 col-span-5">
                          {data.key_type ? data.key_type.key_type : "Ggg"}
                        </div>
                      </div>
                      {type.type_name !== "Rest API" ? (
                        <div className="grid grid-cols-6">
                          <div className="px-4 py-2 font-semibold">경로</div>
                          {type.type_name === "S3" ? (
                            <div className="px-4 py-2 col-span-5">
                              s3://live-nxlog-userprofile-ap-northeast-1/
                              {data.database_name}/{data.table_name}
                            </div>
                          ) : (
                            <div className="px-4 py-2 col-span-5">
                              upwrite-pub.labs.nexon.com:[{data.database_name}
                              ].[dbo].[{data.table_name}]
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* <!-- End of Feature Info section --> */}
                <div className="my-4"></div>
                {/* <!-- Feature Info Section --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="tracking-wide">2. 데이터 정보</span>
                  </div>
                  {/* <!-- End of Feature Info section --> */}
                  {type.type_name === "Rest API" ? (
                    <div>
                      <SwaggerViewer url={data.file} />{" "}
                    </div>
                  ) : type.type_name === "Contents" ? (
                    <div>
                      <Content />
                    </div>
                  ) : (
                    <div>
                      {/* 스키마 설명 */}
                      <DataInfo columns={data.columns} />
                      <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                          <span className="tracking-wide">3. 샘플 데이터</span>
                        </div>
                        <CsvReader key={data.id} />
                      </div>
                      <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="tracking-wide">
                              4. 데이터 분포
                            </span>
                          </div>
                          <Haappy />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* <!-- Experience and education --> */}
                <div className="my-4"></div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">이용 사례</span>
                      </div>

                      <ul className="list-inside space-y-2">
                        {data.usecases
                          ? data.usecases.map((item: any) => {
                              return (
                                <li>
                                  <a
                                    href={item.url_link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <div className="text-teal-600">
                                      {item.name}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                      {item.desc}
                                    </div>
                                  </a>
                                </li>
                              );
                            })
                          : "없음"}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">공지사항</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        {data.notices
                          ? data.notices.map((item: any) => {
                              return (
                                <li>
                                  <a
                                    href={item.url_link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <div className="text-teal-600">
                                      {item.name}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                      {item.desc}
                                    </div>
                                  </a>
                                </li>
                              );
                            })
                          : "없음"}
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End of Experience and education grid --> */}
                </div>

                <div className="my-4"></div>

                {/* 신규 작업 중  */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        {/* <span className="tracking-wide">테스트 중</span> */}
                        <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
                          <TabComponents
                            isActive={priceMatch !== null}
                            text="Stat"
                            link={`price`}
                          />
                          <TabComponents
                            isActive={chartMatch !== null}
                            text="Distribution"
                            link={`chart`}
                          />
                        </ul>
                        {/* <Price /> */}
                      </div>
                      <div className="my-4"></div>
                      <Routes>
                        <Route path="price" element={<Price />} />
                        <Route path="chart" element={<Chart />} />
                      </Routes>
                      {/* <ul className="list-inside space-y-2">rrr</ul> */}
                    </div>
                  </div>
                  {/* <!-- End of Experience and education grid --> */}
                </div>

                {/* <!-- End of profile tab --> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </>
      )}
    </div>
  );
};
