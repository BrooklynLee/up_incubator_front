import { combineReducers } from "redux";
import usersReducer from "./usersSlice"

// // export default combineReducers({
// //     usersReducer
// // });

const rootReducer = combineReducers({
    usersReducer
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;



// export default combineReducers({
//     usersReducer
// });