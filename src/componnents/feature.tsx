import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface IFeatureProps {
    key: number;
    id: string;
    name: string;
    desc?: string;
    feature_type?: any;
    key_type?: any;
    status_type?: any;
    tag?: any;
    database_name?: any;
    table_name?: any;
}


export const Feature: React.FC<IFeatureProps> = ({
    id,
    name,
    desc,
    feature_type,
    key_type,
    status_type,
    tag,
    database_name,
    table_name
}) => {
    const history = useNavigate();
    const onSearchSubmit = () => {
        history({
            pathname: "/search?tag=",
        });
    };
    return (

        // <Link to={`/features/${id}`}>
        <li className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
            <div className="col-span-1 flex justify-center items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg> */}
                {id}
            </div>
            <div className="col-start-2 col-span-6 pl-8 border-l-2 border-solid border-gray">
                <Link to={`/features/${id}`}>
                    <div>
                        <h3 className="text-gray-900 font-medium text-lg">{name}</h3>
                        <p className="text-gray-600 mt-1 font-regular text-md">
                            {desc}</p>
                        <p className="text-gray-600 mt-3 font-regular text-sm">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100">
                                {/* <a href={`/search?tag=${feature_type.type_name}`}> */}
                                {feature_type.type_name}
                                {/* </a> */}
                            </span>
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5  text-gray-800 bg-gray-100">
                                {/* <a href={`/search?tag=${key_type.key_type}`}> */}
                                {key_type.key_type}
                                {/* </a> */}
                            </span>
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5  text-gray-800 bg-gray-100">
                                {/* <a href={`/search?tag=${status_type.status_type}`}> */}
                                {status_type.status_type}
                                {/* </a> */}
                            </span>
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5  text-gray-800 bg-gray-100">
                                12명이 사용 중
                            </span>
                        </p>
                    </div>
                    {/* {feature_type.type_name != "Rest API" ?
                        <div>
                            {feature_type.type_name == "S3"
                                ? <p className="text-gray-600 mt-1 font-regular text-sm text-green-800">s3://live-nxlog-userprofile-ap-northeast-1/{database_name}/{table_name}</p>
                                : <p className="text-gray-600 mt-1 font-regular text-sm text-green-800">upwrite-pub.labs.nexon.com:[{database_name}].[dbo].[{table_name}]</p>
                            }
                        </div> : null} */}
                </Link>
            </div >
            <div className="col-start-9">
                {tag.map((item: any) => {
                    return (
                        <span
                            className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            <a href={`/search?tag=${item.id}`}>{item.name}</a></span>
                    )
                })}
            </div>
        </li >
        // </Link >

    );
}