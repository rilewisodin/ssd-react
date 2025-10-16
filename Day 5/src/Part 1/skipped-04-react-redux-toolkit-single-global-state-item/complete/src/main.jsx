import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AppRouter from "./routers/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
