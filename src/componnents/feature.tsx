import React from "react";
import { Link } from "react-router-dom";

interface IFeatureProps {
    key: number;
    id: string;
    name: string;
    desc?: string;
    feature_type?: any;
    tag?: any;
}

export const Feature: React.FC<IFeatureProps> = ({
    id,
    name,
    desc,
    feature_type,
    tag
}) => (
    <Link to={`/features/${id}`}>
        <div className="flex flex-col">
            <div
                // style={{ backgroundImage: `url(${coverImg})` }}
                className="bg-cover bg-center mb-3 py-28"
            ></div>
            <h3 className="text-xl">{id}</h3>
            <span className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400">
                {name}
            </span>
            <span className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400">
                {desc}
            </span>
            <span className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400">
                {feature_type.type_name}
            </span>

            {tag.map((item: any) => {
                return (
                    < div className="row" >
                        <Link to={`/search?tag=${item.id}`}>{item.name}</Link>
                        {/* <a className="col-sm-2">{item.name}</a> */}
                    </div>
                )
            })}

        </div>
    </Link >
);