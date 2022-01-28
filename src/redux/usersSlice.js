import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';
import api from "../api";
import { setFavs } from "./featuresSlice";

const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoggedIn: false,
        token: null
    },
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        logOut(state, action) {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const { logIn, logOut } = userSlice.actions;

export const userLogin = form => async dispatch => {
    try {
        const {
            data: { id, token }
        } = await api.login(form);
        if (id && token) {
            dispatch(logIn({ token, id }));
        }
    } catch (e) {
        alert("Wrong user/password");
    }
};

// export const userLogin = (form: any) => async (dispatch: Dispatch) => {
//     try {
//         const {
//             data: { id, token }
//         } = await api.login(form);
//         if (id && token) {
//             dispatch(logIn({ token, id }));
//         }
//     } catch (e) {
//         alert("Wrong user/password");
//     }
// };


export const getFavs = () => async (dispatch, getState) => {
    const {
        usersReducer: { id, token }
    } = getState();
    try {
        const { data } = await api.favs(id, token);
        dispatch(setFavs(data));
    } catch (e) {
        console.warn(e);
    }
};

export const toggleFav = featureId => async (dispatch, getState) => {
    const {
        usersReducer: { id, token }
    } = getState();
    try {
        // const data = await api.toggleFavs(id, featureId, token);
        // console.log(data);
        const { status } = await api.toggleFavs(id, featureId, token);
        console.log(status);
    } catch (e) {
        console.warn(e);
    }
};



export default userSlice.reducer;

