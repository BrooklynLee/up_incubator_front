import React from "react";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";

export const SwaggerViewer = ({ url }: { url: string }) => {
    // const { data } = useMe();
    return (
        <div>
            <SwaggerUI url={url} />
        </div>
    );
};

