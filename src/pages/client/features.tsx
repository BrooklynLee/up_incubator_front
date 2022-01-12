import { url } from "inspector";
import { useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../../componnents/feature";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IFormProps {
    searchTerm: string;
}

export const Features = () => {

    // const classes = useStyles();
    const [features, setFeatures] = useState({ results: [] });
    const [progress, setProgress] = useState(0);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            // setInterval(() => {
            //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            // }, 20);
            setLoading(true);

            const result = await axios.get("/api/v1/features/")
            setFeatures(result.data);
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
            <form
                onSubmit={handleSubmit(onSearchSubmit)}
                className="bg-gray-800 w-full py-40 flex items-center justify-center"
            >
                <input
                    // ref={register({ required: true, min: 3 })}
                    name="searchTerm"
                    type="Search"
                    className="input rounded-md border-0 w-3/4 md:w-3/12"
                    placeholder="Search restaurants..."
                />
            </form>
            <div className="max-w-screen-2xl mx-auto mt-8">
                <div className="flex justify-around max-w-sm mx-auto ">

                    {features?.results?.map((item: any) => (
                        <div className="flex flex-col group items-center cursor-pointer">
                            <div
                                className="w-16 h-16 bg-cover group-hover:bg-gray-100 rounded-full"
                            // style={{ backgroundImage: `url(${category.coverImg})` }}
                            ></div>
                            <span className="mt-1 text-sm text-center font-medium" key={item.id}>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="grid mt-10 grid-cols-3 gap-x-5 gap-y-10">
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
                </div>

            </div>
        </div >
    );
};
