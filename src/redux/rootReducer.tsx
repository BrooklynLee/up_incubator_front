import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import featuresReducer from "./featuresSlice";
import featureReducer from "./featureSlice";
import todosReducer from "../pages/client/toDoSlice";

// // export default combineReducers({
// //     usersReducer
// // });

const rootReducer = combineReducers({
  usersReducer,
  featuresReducer,
  featureReducer,
  todosReducer,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

// export default combineReducers({
//     usersReducer
// });
