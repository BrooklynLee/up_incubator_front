import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

const persistConfig = {
  key: "root",
  // storage: sessionStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//     reducer: rootReducer
// });

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // devTool 의 옵션을 선택합니다.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // thunk: {
      //     extraArgument: myCustomApiService,
      // },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
