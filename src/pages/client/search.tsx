import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SwaggerTest } from "../../componnents/swagger";


export const Search = () => {
    // const location = useLocation();
    // const history = useNavigate();

    // useEffect(() => {
    // const [_, query] = location.search.split("?term=");
    // if (!query) {
    //     return history.replace("/");
    // }
    // callQuery({
    //     variables: {
    //         input: {
    //             page: 1,
    //             query,
    //         },
    //     },
    // });
    // }, [history, location]);
    // console.log(loading, data, called);
    return (
        // <div className="max-w-screen-xl mx-auto mt-8">

        //     <div className="px-12">
        //         {/* <div className="relative"> */}

        //         {/* <!-- Right Side --> */}
        //         <div className="w-full mx-2 h-64">

        //             {/* <!-- Feature Info Section --> */}
        //             <div className="bg-white p-3 shadow-sm rounded-sm">
        //                 <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        //                     {/* <span className="text-green-500">
        //                         <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //                             stroke="currentColor">
        //                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        //                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        //                         </svg>
        //                     </span> */}
        //                     <span className="tracking-wide">1. 기본 정보</span>
        //                 </div>
        //                 <div className="text-gray-700">
        //                     <div className="grid grid-cols-1 text-sm">
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">UP 이름
        //                             </div>
        //                             <div className="px-4 py-2">Jane</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">타입</div>
        //                             <div className="px-4 py-2">Doe</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">데이터 설명</div>
        //                             <div className="px-4 py-2">Doe</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">카테고리</div>
        //                             <div className="px-4 py-2">Female</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">담당자</div>
        //                             <div className="px-4 py-2">+11 998001001</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">참고 링크</div>
        //                             <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
        //                         </div>
        //                         {/* <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">Email.</div>
        //                             <div className="px-4 py-2">
        //                                 <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
        //                             </div>
        //                         </div> */}
        //                     </div>
        //                 </div>
        //                 {/* <button
        //                     className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
        //                     Full Information</button> */}
        //             </div>
        //             {/* <!-- End of Feature Info section --> */}

        //             <div className="my-4"></div>

        //             {/* <!-- Feature Info Section --> */}
        //             <div className="bg-white p-3 shadow-sm rounded-sm">
        //                 <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        //                     {/* <span className="text-green-500">
        //                         <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //                             stroke="currentColor">
        //                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        //                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        //                         </svg>
        //                     </span> */}
        //                     <span className="tracking-wide">2. 데이터 정보</span>
        //                 </div>
        //                 <div className="text-gray-700">
        //                     <div className="grid grid-cols-2 text-sm">
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">적재 타입</div>
        //                             <div className="px-4 py-2">History</div>
        //                         </div>
        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">집계 기준</div>
        //                             <div className="px-4 py-2">NexonSN</div>
        //                         </div>

        //                         <div className="grid grid-cols-2">
        //                             <div className="px-4 py-2 font-semibold">경로</div>
        //                             <div className="px-4 py-2">
        //                                 <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 {/* <button
        //                     className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
        //                     Full Information</button> */}
        //             </div>
        //             {/* <!-- End of Feature Info section --> */}


        //             {/* <!-- Experience and education --> */}
        //             <div className="bg-white p-3 shadow-sm rounded-sm">

        //                 <div className="grid grid-cols-2">
        //                     <div>
        //                         <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        //                             <span className="text-green-500">
        //                                 <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //                                     stroke="currentColor">
        //                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        //                                         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        //                                 </svg>
        //                             </span>
        //                             <span className="tracking-wide">Experience</span>
        //                         </div>
        //                         <ul className="list-inside space-y-2">
        //                             <li>
        //                                 <div className="text-teal-600">Owner at Her Company Inc.</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                             <li>
        //                                 <div className="text-teal-600">Owner at Her Company Inc.</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                             <li>
        //                                 <div className="text-teal-600">Owner at Her Company Inc.</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                             <li>
        //                                 <div className="text-teal-600">Owner at Her Company Inc.</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div>
        //                         <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        //                             <span className="text-green-500">
        //                                 <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //                                     stroke="currentColor">
        //                                     <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
        //                                     <path fill="#fff"
        //                                         d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        //                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        //                                         d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        //                                 </svg>
        //                             </span>
        //                             <span className="tracking-wide">Education</span>
        //                         </div>
        //                         <ul className="list-inside space-y-2">
        //                             <li>
        //                                 <div className="text-teal-600">Masters Degree in Oxford</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                             <li>
        //                                 <div className="text-teal-600">Bachelors Degreen in LPU</div>
        //                                 <div className="text-gray-500 text-xs">March 2020 - Now</div>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 {/* <!-- End of Experience and education grid --> */}
        //             </div>
        //             {/* <!-- End of profile tab --> */}
        //         </div>
        //     </div>
        //     {/* </div> */}
        // </div>
        <div>

        </div>
    );
};