import React from "react";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";



interface IProps {
    url: string;
}

export const SwaggerTest = ({ url }: { url: string }) => {
    // const { data } = useMe();
    return (
        <div>
            <SwaggerUI url={url} />
        </div>
    );
};

