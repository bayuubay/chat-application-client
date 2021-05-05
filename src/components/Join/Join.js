import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./Join.css";
const Join = () => {
  // const chatLink = (event) => (!name || !room ? event.preventDefault() : null);
  const chatLink = (event) => {
    const roomInt=Number(room)
    if(!name||!room||roomInt){
      alert("RoomID must be text")
      return event.preventDefault()
    }else{
      
     return null
    }
  };
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  // console.log(setRoom(event.target.value))
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Chatroom</h1>
        <div>
          <input
            placeholder="Username"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="RoomID"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link onClick={chatLink} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-21" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
