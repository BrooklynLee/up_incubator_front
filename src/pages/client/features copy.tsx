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
        <div>
            <div className="relative">
                <form
                    onSubmit={handleSubmit(onSearchSubmit)}
                >
                    {/* <div className="flex border-2 border-gray-200 rounded">
                    <input name="searchTerm" type="text" className="px-4 py-2 w-80" placeholder="Search...">

                    </input>
                </div> */}
                    <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Search..." className="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" />
                </form>
            </div>
            <div className="max-w-screen-xl mx-auto mt-8">
                <div className="flex justify-around max-w-sm mx-auto ">

                    {tags?.results?.map((item: any) => (
                        <Link key={item.id} to={`/category/${item.id}`}>
                            <div className="flex flex-col group items-center cursor-pointer">
                                <div
                                    className="w-16 h-16 bg-cover group-hover:bg-gray-100 rounded-full"
                                // style={{ backgroundImage: `url(${category.coverImg})` }}
                                ></div>
                                <span className="mt-1 text-sm text-center font-medium">
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {/* <div className="grid mt-10 grid-cols-3 gap-x-5 gap-y-10"> */}
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tag
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Setting
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                    </div>
                                                    {/* <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Jane Cooper
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jane.cooper@example.com
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                                <div className="text-sm text-gray-500">Optimization</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </div >
    );
};
