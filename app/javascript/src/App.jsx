import React, { useEffect } from "react";

// import { Form } from "neetoui/formik";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Sidebar from "components/Common/Sidebar";
import Notes from "components/Notes";
import "lib/dayjs";

const App = () => {
  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <Switch>
          <Route component={Notes} path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
