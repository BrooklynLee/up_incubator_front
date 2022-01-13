import React from "react";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";


export const SwaggerTest: React.FC = () => {
    // const { data } = useMe();
    return (
        <div>
            <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
        </div>
    );
};

