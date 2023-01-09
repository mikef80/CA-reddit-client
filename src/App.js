import React from "react";
import "./App.css";
import { TitleBar } from "./TitleBar/TitleBar";
import { Main } from "./Main/Main";
import { Provider } from "react-redux";

import { persistor, store } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TitleBar />
        <div className="App flex flex-col  h-full md:w-1/2 grow m-auto ">
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
