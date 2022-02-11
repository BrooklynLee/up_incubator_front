import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const featuresSlice = createSlice({
  name: "features",
  initialState: {
    explore: {
      page: 1,
      keyword: "",
      features: [],
    },
    favs: [],
  },
  reducers: {
    setExploreFeatures(state, action) {
      // const { explore } = state;
      const { payload } = action;

      const newFeatures = payload.features.filter(
        x => !state.explore.features.some(y => y.id === x.id)
      );

      return {
        ...state,
        explore: {
          ...state.explore,
          features: [...newFeatures, ...state.explore.features],
          page: payload.page,
        },
      };

      // payload.features.forEach(payloadFeature => {
      //   // explore.features.push(payloadFeature);

      //   const exists = explore.features.find(
      //     savedFeature => savedFeature.id === payloadFeature.id
      //   );
      //   if (!exists) {
      //     explore.features.push(payloadFeature);
      //   }
      // });
      // state.explore.page = payload.page;
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
    setFavs(state, action) {
      state.favs = action.payload;
    },
    setFav(state, action) {
      const {
        payload: { featureId },
      } = action;
      const feature = state.explore.features.find(
        features => features.id === featureId
      );
      if (feature) {
        if (feature.is_fav) {
          feature.is_fav = false;
          state.favs = state.favs.filter(feature => feature.id !== featureId);
        } else {
          feature.is_fav = true;
          state.favs.push(feature);
        }
      }
    },
  },
});

export const { setExploreFeatures, increasePage, setFavs, setFav } =
  featuresSlice.actions;

export const getFeatures = page => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();

  try {
    const {
      data: { results },
    } = await api.features(token, page);

    // console.log(results);

    dispatch(
      setExploreFeatures({
        features: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default featuresSlice.reducer;
