import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import mainStore from "./store/index.js";

// Root File

let persistor = persistStore(mainStore);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={mainStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
