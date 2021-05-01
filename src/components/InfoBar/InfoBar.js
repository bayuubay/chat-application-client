import React from 'react';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <a className="exitBtn" href="/" >Exit</a>
    </div>
    <div className="rightInnerContainer">
    <h2> {room}</h2>
     
    </div>
  </div>
);

export default InfoBar;