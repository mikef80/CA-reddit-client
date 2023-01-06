import React from "react";
import "./App.css";
import { TitleBar } from "./TitleBar/TitleBar";
import { Main } from "./Main/Main";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <TitleBar />
      <div className="App flex flex-col  h-full md:w-1/2 grow m-auto ">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
