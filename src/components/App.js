import React, { Suspense, lazy } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = React.lazy(() => import('./home/HomePage'));


function App() {
  return (
    <div className=" md:mx-auto">
      <div className="bg-sky-400 md:mx-auto">
        <Header />
      </div>
      <div className="md:container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route element={<PageNotFound/>} />
          </Routes>
        </Suspense>
      </div>
      
      
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
   
  );
}

export default App;
