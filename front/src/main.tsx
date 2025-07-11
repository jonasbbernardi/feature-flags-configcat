import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigCatProvider, PollingMode } from "configcat-react";
import App from "./App";

const sdkKey = import.meta.env.VITE_CONFIGCAT_SDK_KEY;
const pollIntervalSeconds = +import.meta.env.VITE_CONFIGCAT_POLL_INTERVAL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigCatProvider
      sdkKey={sdkKey}
      pollingMode={PollingMode.AutoPoll}
      options={{
        pollIntervalSeconds
      }}>

      <App />

    </ConfigCatProvider>
  </React.StrictMode>
);