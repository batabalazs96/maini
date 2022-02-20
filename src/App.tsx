import React from "react"
import './App.css';
import NavBar from "./conponents/NavBar/NavBar";
import { useTranslation } from 'react-i18next';
import Carousel from "./conponents/Carousel/Carousel";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./containers/HomePage/HomePage";
import { Footer } from "./conponents/Footer/Footer";

const App = () => {
  const { t } = useTranslation();
  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route
        element={<HomePage/>}
        path='/maini'
      ></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>)
}

export default App;
