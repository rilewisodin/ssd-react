import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { store } from "./store/store";
import "./styles/styles.scss";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
