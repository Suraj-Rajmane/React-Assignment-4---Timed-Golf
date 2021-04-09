
import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      x: 0,
      y: 0
    }
  }

  componentDidUpdate() {

    if (this.state.x == 250 && this.state.y == 250) {

      document.removeEventListener("keydown", this.moveBall);
      clearInterval(this.intervalID);

      console.log("ball reached the destination");
    }

  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.moveBall);
  }


  buttonClickHandler = () => {

    if (this.state.time == 0) {

      document.addEventListener("keydown", this.moveBall);

      console.log("eventListener added");

      this.intervalID = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        });
      }, 1000)


    }

  }


  moveBall = (event) => {

    switch (event.key) {
      case "ArrowRight"://right
        this.setState({
          x: this.state.x + 5,
          y: this.state.y
        }
        );


        break;

      case "ArrowDown"://down
        this.setState({
          x: this.state.x,
          y: this.state.y + 5
        }
        );

        break;

      case "ArrowLeft"://left
        this.setState({
          x: this.state.x - 5,
          y: this.state.y
        }
        );

        break;

      case "ArrowUp"://up
        this.setState({
          x: this.state.x,
          y: this.state.y - 5
        }
        );

        break;

      default:
        this.setState({
          x: this.state.x,
          y: this.state.y
        })

    }

  }

  render() {

    return (
      <div className="playground">
        <div
          className="ball"
          style={{
            position: "absolute",
            left: this.state.x + "px",
            top: this.state.y + "px",
          }}
        ></div>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
        <button className="start" onClick={this.buttonClickHandler} >Start</button>
      </div>
    );
  }
}

export default App;




/*
import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {

  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });

  const [time, setTime] = useState(0);

  let intervalID = 0;

  useEffect(() => {
    console.log("useEffect called");

    if(ballPosition.left == 250 && ballPosition.top == 250) {

      

      document.removeEventListener("keydown", moveBall);
      clearInterval(intervalID);

      console.log("ball reached the destination");
    }


  },[ballPosition]);


  const moveBall = (event) => {

      switch (event.key) {
        case "ArrowRight"://right
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left + 5,
              top: ballPosition.top
            }
          });

          
          break;

        case "ArrowDown"://down
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left,
              top: ballPosition.top + 5
            }
          });

          break;

        case "ArrowLeft"://left
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left - 5,
              top: ballPosition.top
            }
          });

          break;

        case "ArrowUp"://up
          setBallPosition((ballPosition) => {
            return {
              left: ballPosition.left,
              top: ballPosition.top - 5
            }
          });

          break;

        default:
          setBallPosition({
            left: ballPosition.left,
            top: ballPosition.top
          })
        
      }

  }



  const buttonClickHandler = () => {

    if(time == 0) {

      document.addEventListener("keydown", moveBall);

      console.log("eventListener added");

      intervalID = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000)


    }
    

    
  };


  return (
    <div className="playground">
      <div
        className="ball"
        style={{
          position: "absolute",
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

*/
