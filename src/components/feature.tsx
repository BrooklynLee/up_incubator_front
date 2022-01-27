import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

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


    // 상단의 내용은 신규 추가 건

    const history = useNavigate();
    const onSearchSubmit = () => {
        history({
            pathname: "/search?tag=",
        });
    };

    return (

        <li className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
            <div className="col-span-1 flex justify-center items-center">

                {id}
            </div>
            <div className="col-start-2 col-span-6 pl-8 border-l-2 border-solid border-gray">
                <Link to={`/features/${id}`}>
                    <div>
                        <h3 className="text-gray-900 font-medium text-md">{name}</h3>
                        <p className="text-gray-600 mt-1 font-regular text-sm">
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

                </Link>
            </div >
            <div className="col-start-9">
                {tag.map((item: any) => {
                    return (
                        <span
                            className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {/* // onClick={handleSubmit}> */}
                            <a href={`/search?tag=${item.id}`}>{item.name}</a>
                            {/* {item.name} */}
                        </span>
                    )
                })}
            </div>
        </li >
        // </Link >

    );
}