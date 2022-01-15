
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { SwaggerTest } from "../../componnents/swagger";


// interface IFeatureParams {
//     id: string;
// }

export const Feature = () => {
    // const params = useParams<IFeatureParams>();

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<any>({});
    const [owner, setOwner] = useState({});
    const [type, setType] = useState<any>({});

    const { id } = useParams();
    // const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            const result = await axios.get("/api/v1/features/" + id)
            setData(result.data);
            setType(result.data.feature_type);
            setLoading(false);
        };
        fetchData();
    }, []);


    return (
        <div className="post-view-wrapper bg-gray-100">
            {
                isLoading ? (<div>불러오는 중 ...</div>) : (
                    <>
                        <div className="max-w-screen-xl mx-auto mt-8 ">

                            <div className="px-12">
                                {/* <div className="relative"> */}

                                {/* <!-- Right Side --> */}
                                <div className="w-full mx-2 h-64">

                                    {/* <!-- Feature Info Section --> */}
                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                            <span className="tracking-wide">1. 기본 정보</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <div className="grid grid-cols-1 text-sm">
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 col-span-1 font-semibold">UP 이름
                                                    </div>
                                                    <div className="px-4 py-2">{data?.name}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 col-span-1 font-semibold">타입</div>
                                                    <div className="px-4 py-2">{data.feature_type ? data.feature_type.type_name : "haha"}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 font-semibold">데이터 설명</div>
                                                    <div className="px-4 py-2 col-span-5">{data?.desc}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 col-span-1 font-semibold">태그</div>
                                                    <div className="px-4 py-2">{data.tag ? data.tag.map((item: any) => {
                                                        return (
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                                <a href={`/search?tag=${item.id}`}>{item.name}</a>
                                                            </span>
                                                        )
                                                    })
                                                        : "haha"}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 col-span-1 font-semibold">담당자</div>
                                                    <div className="px-4 py-2">{data.user ? data.user.username : "haha"}</div>
                                                    {/* ({data.created_at})</div> */}
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 font-semibold">참고 링크</div>
                                                    <div className="px-4 py-2 col-span-5">{data.link}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 font-semibold">적재 타입</div>
                                                    <div className="px-4 py-2 col-span-5">{data.status_type ? data.status_type.status_type : "gg"}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 font-semibold">집계 기준</div>
                                                    <div className="px-4 py-2 col-span-5">{data.key_type ? data.key_type.key_type : "Ggg"}</div>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <div className="px-4 py-2 font-semibold">경로</div>
                                                    <div className="px-4 py-2 col-span-5">s3://live-nxlog-userprofile-ap-northeast-1/{data.database_name}/{data.table_name}</div>
                                                </div>
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
                                    </div>
                                    {/* <!-- End of Feature Info section --> */}

                                    {type.type_name == "Rest API" ? <div><SwaggerTest /> </div> : "aa"}

                                    {/* 스키마 설명 */}
                                    <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-12">
                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                                            <div className="block w-full overflow-x-auto">
                                                <table className="items-center bg-transparent w-full border-collapse ">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                컬럼 이름
                                                            </th>
                                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                컬럼 이름(국문)
                                                            </th>
                                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                타입
                                                            </th>
                                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                설명
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{data.columns ? data.columns.map((item: any) => {
                                                        return (
                                                            <tr>
                                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                                    {item.columns_name}
                                                                </th>
                                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                                    {item.columns_name_kr}
                                                                </td>
                                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                    {item.columns_type}
                                                                </td>
                                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                                    {item.columns_desc}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                        : "haha"}
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Experience and education --> */}
                                    <div className="bg-white p-3 shadow-sm rounded-sm">

                                        <div className="grid grid-cols-2">
                                            <div>
                                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                    <span className="text-green-500">
                                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </span>
                                                    <span className="tracking-wide">유즈케이스</span>
                                                </div>
                                                <ul className="list-inside space-y-2">
                                                    <li>
                                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                    <span className="text-green-500">
                                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                            <path fill="#fff"
                                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                        </svg>
                                                    </span>
                                                    <span className="tracking-wide">Education</span>
                                                </div>
                                                <ul className="list-inside space-y-2">
                                                    <li>
                                                        <div className="text-teal-600">Masters Degree in Oxford</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                </ul>
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
                )
            }
            {/* <div><SwaggerTest /> </div> */}

        </div >



    )

    // return (
    //     <div>

    //         <div className="bg-white w-3/12 py-8 pl-48">
    //             <h4 className="text-4xl mb-3">{data?.name}</h4>
    //             <h5 className="text-sm font-light mb-2">
    //                 {data.feature_type.type_name}
    //             </h5>
    //             <h6 className="text-sm font-light">
    //                 {data?.desc}
    //             </h6>
    //         </div>
    //     </div>
    // );
};