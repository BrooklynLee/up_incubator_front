import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const featuresSlice = createSlice({
    name: "features",
    initialState: {
        explore: {
            page: 1,
            features: []
        },
        favs: []
    },
    reducers: {
        setExploreFeatures(state, action) {
            const { explore } = state;
            const { payload } = action;
            payload.features.forEach(payloadFeature => {
                const exists = explore.features.find(
                    savedFeature => savedFeature.id === payloadFeature.id
                );
                if (!exists) {
                    explore.features.push(payloadFeature);
                }
            });
            state.explore.page = payload.page;
        }
    }
});

const { setExploreFeatures } = featuresSlice.actions;


export const getFeatures = () => async dispatch => {
    try {
        const {
            data: { results }
            // data
        } = await api.features();
        console.log(results);
        dispatch(
            setExploreFeatures({
                rooms: results,
                page: 1
            })
        );
    } catch (e) { }
};

export default featuresSlice.reducer;
