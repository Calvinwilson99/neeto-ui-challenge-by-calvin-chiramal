import React, { useEffect } from "react";

import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { initializeLogger } from "common/logger";
import Sidebar from "components/Common/Sidebar";
import Contacts from "components/Contacts";
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
          <Redirect exact from="/" to="/notes" />
          <Route exact component={Notes} path="/" />
          <Route exact component={Contacts} path="/contacts" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
