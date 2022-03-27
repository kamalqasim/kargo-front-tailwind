import React, { Suspense, lazy } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Navbar from './common/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = React.lazy(() => import('./home/HomePage'));


function App() {
  return (
    <div className=" md:mx-auto">
      <div className="bg-[#1d9bf0] md:mx-auto">
        <Header />
      </div>
      <div className=" md:mx-auto">
        <Navbar />

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
