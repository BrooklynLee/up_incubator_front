import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SwaggerTest } from "../../componnents/swagger";


export const Search = () => {
    const location = useLocation();
    const history = useNavigate();

    // useEffect(() => {
    //     const [_, query] = location.search.split("?term=");
    //     if (!query) {
    //         return history.replace("/");
    //     }
    //     callQuery({
    //         variables: {
    //             input: {
    //                 page: 1,
    //                 query,
    //             },
    //         },
    //     });
    // }, [history, location]);
    // console.log(loading, data, called);
    return (

        <div>

        </div>
    );
};