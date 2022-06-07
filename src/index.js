import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
});
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
