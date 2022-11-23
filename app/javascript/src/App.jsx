import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";

const App = () => {
  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Dashboard />
    </BrowserRouter>
  );
};

export default App;
