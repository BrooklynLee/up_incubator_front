import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";

const persistConfig = {
    key: "root",
    // storage: sessionStorage
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//     reducer: rootReducer
// });

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {
            //     extraArgument: myCustomApiService,
            // },
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
});

export const persistor = persistStore(store);
export default store;