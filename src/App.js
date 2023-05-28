import logo from './logo.svg';
import './App.css';
import Info from './pages/Info/Info';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';

const App=()=> {

  const [backgroundImage, setBackgroundImage] = useState('https://source.unsplash.com/1600x900/?landscape');

  const changeBackgroundImage = (newImage) => {
    setBackgroundImage(newImage);
  };


  return (
    <div className= "full" style={{backgroundImage: `url(${backgroundImage})` }}>
      <div className = "container">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home changeBackgroundImage={changeBackgroundImage} />}/>
            <Route path="/info" element={<Info/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
