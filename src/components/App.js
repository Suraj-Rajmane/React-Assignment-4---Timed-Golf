import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {

  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });

  const [time, setTime] = useState(0);

  let intervalID = 0;

  useEffect(() => {
    // console.log("useEffect called");

    if(ballPosition.left == 250 && ballPosition.top == 250) {

      // console.log("ball reached the destination");

      window.removeEventListener("keydown", moveBall);
      clearInterval(intervalID);
    }
      

  }, [ballPosition]);


  const moveBall = (event) => {

      switch (event.key) {
        case "ArrowRight"://right
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left + 5,
              top: ballPosition.top,
            }
          });
          break;
        case "ArrowDown"://down
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left,
              top: ballPosition.top + 5,
            }
          });
          break;
        case "ArrowLeft"://left
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left - 5,
              top: ballPosition.top,
            }
          });
          break;
        case "ArrowUp"://up
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left,
              top: ballPosition.top - 5,
            }
          });
          break;
        
      }

  }



  const buttonClickHandler = () => {
    intervalID = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000)

    window.addEventListener("keydown", moveBall);
    // console.log("eventListener added");

    
  };


  return (
    <div>
      <div
        className="ball"
        style={{
          left: ballPosition.left + "px",
          top: ballPosition.top + "px",
        }}
      ></div>
      <div className="hole"></div>
      <div className="heading-timer">{time}</div>
      <button className="start" onClick={buttonClickHandler} >Start</button>
    </div>
  );
}

export default App;
