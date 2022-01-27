import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";
import { getFeatures } from "../../redux/featuresSlice";

// export default ({ getRooms, rooms, page }) => {
//     useEffect(() => {
//         getFeatures();
//     }, []);
//     return <ExplorePresenter rooms={rooms} />;
// };

export default () => {
    useEffect(() => {
        getFeatures();
    }, []);
    // console.log(props)

    return <ExplorePresenter />;
    // return <ExplorePresenter rooms={rooms} />;
};