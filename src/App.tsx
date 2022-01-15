import React from "react";
import { LoggedInRouter } from "./routers/logged-in-router";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
  return <LoggedInRouter />;
}

export default App;
