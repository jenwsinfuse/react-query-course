import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "@uidotdev/react-query-api";
import {QueryClient, QueryClientProvider} from 'react-query'


const queryClient = new QueryClient()
new Promise((res) => setTimeout(res, 100))
  .then(() =>
    worker.start({
      quiet: true,
      onUnhandledRequest: "bypass",
    })
  )
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <div className="container">
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </div>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
