import { url } from "inspector";
import { useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../../componnents/feature";
import { Link, useNavigate } from "react-router-dom";
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

    useEffect(() => {
        const fetchData = async () => {

            // setInterval(() => {
            //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            // }, 20);
            setLoading(true);

            const result = await axios.get("/api/v1/features/")
            const tag_result = await axios.get("/api/v1/tags/")
            setFeatures(result.data);
            setTags(tag_result.data);
            setLoading(false);


        };
        fetchData();
    }, []);

    const { register, handleSubmit, getValues } = useForm<IFormProps>();
    const history = useNavigate();
    const onSearchSubmit = () => {
        const { searchTerm } = getValues();
        history({
            pathname: "/search",
            search: `?term=${searchTerm}`,
        });
    };

    return (
        <div className="max-w-screen-xl mx-auto mt-8">

            <div className="px-12">
                <div className="relative">

                    {/* Search Component */}
                    <div className="relative">
                        <form
                            onSubmit={handleSubmit(onSearchSubmit)}
                        >
                            <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search..." className="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" />
                        </form>
                    </div>

                    <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Recommended
                        </li>
                        <li className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                <h3 className="text-gray-900 font-medium text-md">Health Elixir</h3>
                                <p className="text-gray-600 mt-1 font-regular text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula gravida justo, at auctor lorem rutrum at.</p>
                            </div>
                        </li>
                        <li className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                <h3 className="text-gray-900 font-medium text-md">Health Elixir</h3>
                                <p className="text-gray-600 mt-1 font-regular text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula gravida justo, at auctor lorem rutrum at.</p>
                            </div>
                        </li>
                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Others
                        </li>
                        {features?.results?.map((c: any) => (
                            <Feature
                                key={c.id}
                                id={c.id}
                                name={c.name}
                                desc={c.desc}
                                feature_type={c.feature_type}
                                tag={c.tag}
                            />
                        ))}
                    </ul >
                </div>
            </div>
        </div>
    );
};
