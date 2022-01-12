import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


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
            {/* <Helmet> */}
            <title>Search | Nuber Eats</title>
            {/* </Helmet> */}
            <h1>Search page</h1>
        </div>
    );
};