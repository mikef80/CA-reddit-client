import React from "react";
import "./App.css";
import { TitleBar } from "./TitleBar/titleBar";
import { Main } from "./Main/Main";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App flex flex-col p-3 h-full grow'>
        <TitleBar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
