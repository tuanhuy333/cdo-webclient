import React, { Suspense } from "react";
import "./App.css";
import "../node_modules/antd/dist/antd.css";
import "./i18n";

import AppRouter from "./router/AppRouter";
function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <AppRouter />
      </div>
    </Suspense>
  );
}

export default App;
