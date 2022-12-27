import React from "react";
import "./App.css";
import { TitleBar } from "./TitleBar/titleBar";
import { Main } from "./Main/Main";

function App() {
  return (
    <div className='App flex flex-col p-3 h-full grow'>
      <TitleBar />
      <Main />
    </div>
  );
}

export default App;
