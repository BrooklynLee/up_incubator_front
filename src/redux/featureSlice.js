import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    feature: {},
  },
  reducers: {
    getFeature: (state, action) => {
      state.feature = action.payload;
    },
  },
});

export const { getFeature } = featureSlice.actions;

export const fetchFeature = id => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();
  // console.log(token);

  try {
    const results = await api.feature(id, token);
    dispatch(
      getFeature({
        feature: results.data,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default featureSlice.reducer;
