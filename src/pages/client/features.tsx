import { url } from "inspector";
import { useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../../componnents/feature";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IFormProps {
    searchTerm: string;
}

export const Features = () => {

    // const classes = useStyles();
    const [features, setFeatures] = useState({ results: [] });
    const [tags, setTags] = useState({ results: [] });
    const [progress, setProgress] = useState(0);
    const [isLoading, setLoading] = useState(false)
    const [values, setValues] = useState();


    const { handleSubmit, getValues } = useForm<IFormProps>();
    const history = useNavigate();
    const onSearchSubmit = () => {
        const { searchTerm } = getValues();
        console.log(searchTerm)
        history({
            pathname: "/search",
            search: `?term=${searchTerm}`,
        });
    };


    useEffect(() => {
        const fetchData = async () => {

            // setInterval(() => {
            //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            // }, 20);
            // setLoading(true);

            setLoading(true);
            const result = await axios.get("/api/v1/features/")
            const tag_result = await axios.get("/api/v1/tags/")
            setFeatures(result.data);
            setTags(tag_result.data);
            setLoading(false);
        };
        fetchData();
    }, []);



    return (
        <div className="max-w-screen-xl mx-auto mt-8">

            <div className="px-12">
                <div className="relative">

                    {/* Search Component */}
                    <div className="relative">
                        <form onSubmit={handleSubmit(onSearchSubmit)}>
                            <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search..." className="focus:ring-2 focus:ring-blue-500 focus:outline-none pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" />
                        </form>

                    </div>

                    <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Recommended
                        </li>
                        {features?.results?.map((c: any) => {
                            if (c.is_recommend == true && c.is_active == true) {
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

                            if (c.is_recommend == false && c.is_active == true) {
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

