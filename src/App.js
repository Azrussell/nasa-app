import logo from './logo.svg';
// import './App.css';
// import Nasa from './Nasa';
// import FetchAnotherWAy from './FetchAnotherWay';
// import FetchAPI from './FetchAPi';
// import FetchAnotherWAy from './FetchAnotherWay';
import React, { useState } from "react";
import LikeButton from './LikeButton';
// import styled from "styled-components";



 function clickMe() {
  alert("You clicked me");
 }


function App() {
  return (
    <div className="App">
      <header>
        WHY IS THE TEXT NOT DISPLAYING ON SCREEN
      </header>
        <button onClick={clickMe}> Get API </button>
      <LikeButton />
        {/* <div>
            MY API <br />
             <button onClick={apiGet}> Fetch API </button>
         </div> */}
      {/* <FetchAnotherWAy /> */}
      {/* <FetchAPI /> */}
      {/* <FetchAnotherWAy /> */}
      
    </div>
  );
}

export default App;
