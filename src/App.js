import React from "react";
import "./App.css";
import { TitleBar } from "./TitleBar/TitleBar";
import { Main } from "./Main/Main";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App flex flex-col p-3 h-full md:w-1/2 grow m-auto'>
        <TitleBar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
