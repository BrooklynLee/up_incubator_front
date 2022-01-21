import React from "react";
import { LoggedInRouter } from "./routers/logged-in-router";
import { Buffer } from 'buffer';
import { LoggedOutRouter } from "./routers/logged-out-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { logIn, logOut } from "./redux/usersSlice";
import store from "./redux/store";

// import {login}
global.Buffer = Buffer;


function App() {
  // const isLoggedIn = true;
  const { isLoggedIn } = useSelector((state: RootState) => state.usersReducer);
  const dispatch = useDispatch();

  return isLoggedIn ? <div><LoggedInRouter /></div> : <LoggedOutRouter />;
}

export default App;
