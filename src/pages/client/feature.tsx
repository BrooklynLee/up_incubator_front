
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


// interface IFeatureParams {
//     id: string;
// }

export const Feature = () => {
    // const params = useParams<IFeatureParams>();

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<any>({});
    const [type, setType] = useState({});
    const { id } = useParams();
    // const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            const result = await axios.get("/api/v1/features/" + id)
            setData(result.data);
            setLoading(false);
            console.log(data)


            // setLoading(true);

            // // setInterval(() => {
            // //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            // // }, 20);
            // const result = await axios.get("/api/v1/features/" + id)
            // setData(result.data);
            // setType(result.data.feature_type);
            // console.log(data)

            // setLoading(false);
        };
        fetchData();
    }, []);


    return (
        <div className="post-view-wrapper">
            {
                isLoading ? (<div>불러오는 중 ...</div>) : (
                    <>
                        <h4 className="text-4xl mb-3">
                            <label>게시글 번호</label>
                            <label>{data?.id}</label>
                        </h4>
                        <div className="text-sm font-light mb-2">
                            <label>제목</label>
                            <label>{data?.name}</label>
                        </div>
                        <div className="post-view-row">
                            <label>타입</label>
                            <label>{data.feature_type ? data.feature_type.type_name : "haha"}</label>
                        </div>
                        <div className="post-view-row">
                            <label>작성일</label>
                            <label>{data.created_at}</label>
                        </div>
                        <div className="post-view-row">
                            <label>링크</label>
                            <label>{data.link}</label>
                        </div>
                        <div className="post-view-row">
                            <label>내용</label>
                            <div>
                                {
                                    data.desc
                                }
                            </div>
                        </div>
                    </>
                )
            }
            {/* <div><SwaggerTest /> </div> */}
            {/* {data.feature_type.type_name === "MySQL" ? <div><SwaggerTest /> </div> : <div>I am {data.feature_type.type_name}</div>} */}
        </div>



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