import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../../components/feature";


export const Search = () => {
    const location = useLocation();
    const history = useNavigate();

    const [features, setFeatures] = useState({ results: [] });
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<any>({});
    const [owner, setOwner] = useState({});
    const [type, setType] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [_, query_chunk] = location.search.split("?");
            const [query1, query2] = query_chunk.split("=");
            console.log(query1)
            console.log(query2)


            if (query1 === "term") {
                const result = await axios.get("/api/v1/features?search=" + query2)
                setFeatures(result.data);
                setType(result.data.feature_type);
                setLoading(false);
            } else if (query1 === "tag") {
                const result = await axios.get("/api/v1/features?tag=" + query2)
                setFeatures(result.data);
                setType(result.data.feature_type);
                setLoading(false);
            } else if (query1 === "feature_type") {
                const result = await axios.get("/api/v1/features?feature_type=" + query2)
                setFeatures(result.data);
                setType(result.data.feature_type);
                setLoading(false);
            }
        };
        fetchData();
    }, [history, location]);


    // console.log(loading, data, called);
    return (
        <div className="max-w-screen-xl mx-auto mt-8">

            <div className="px-12">
                <div className="relative">


                    <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Recommended
                        </li>
                        {features?.results?.map((c: any) => {


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
                                    />
                                )
                            }
                        })}

                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Others
                        </li>
                        {features?.results?.map((c: any) => {

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
                                )
                            }
                        })}
                    </ul >
                </div>
            </div>
        </div >
    );
};