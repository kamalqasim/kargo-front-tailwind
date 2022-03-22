import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = lazy(() => import('./home/HomePage'));


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
      
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
