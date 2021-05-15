
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from "react-bootstrap";
import axios from "./axios";


  
function Timer() {

  const [isActive, setIsActive] = useState(false);
  const [second, setSecond] =useState('00');
  const [minute, setMinute] = useState('00');
  const [milisecond, setMiliSecond] = useState('00');
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(true);

  // to set time 
  useEffect(() => {
    let intervalId;

    if (isActive && stop === false) {
      intervalId = setInterval(() => {
        const milisecondCounter =  ((counter / 10) % 100);
        const secondCounter = Math.floor((counter / 1000) % 60);
        const minuteCounter = Math.floor((counter / 60000) % 60);

        const computedmiliSecond = String(milisecondCounter).length === 1 ? `0${milisecondCounter}`: milisecondCounter;
        const computedSecond = String( secondCounter).length === 1 ? `0${ secondCounter}`: secondCounter;

        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
       
        setMiliSecond(computedmiliSecond);
        setMinute(computedMinute);
        setSecond(computedSecond );

        setCounter(counter => counter + 10);
      }, 10)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter,stop])


  //to handle start button
  const handleStart = () => {
    setIsActive(true);
    setStop(false);
  
  };

  //to handle stop button
  const handleStop = () => {
    setIsActive(false);
    setStop(true);
    
  };

  
 
  //to handle reset
  const handleReset = () => {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMiliSecond('00');
    setMinute('00');
   
  };

  //to post the action and time 
  async function onClick(e){
    e.preventDefault();
    axios.post('/view/new', {
      action: e.target.innerHTML,
      time:`${minute}:${second}:${milisecond}`,
      
    });

  }
  
  return (
    <div className="App">
      <Container className="Navbar" >
          <Navbar bg="light" >
          <Navbar.Brand href="/">Timer</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/view">View History</Nav.Link>
          </Navbar.Collapse>
      </Navbar>
      <div className="Timer">
          <div className="timer">


              <span className="digits">
              {minute}:
              </span>
              <span className="digits">
              {second}:
              </span>
              <span className="digits mili-sec">
              {milisecond}
              </span>
          
        </div>
        <div className="Control-Buttons">
      
          <div className="btn-grp">
            <div className="btn btn-one btn-start"
                onClick={(e) => {handleStart(); onClick(e);}}>
                     Start
            </div>
              <div className="btn btn-two" 
                   onClick={(e) => {handleReset(); onClick(e);}}>
                Reset
              </div>
              <div className="btn btn-two" 
                    onClick={(e) => {handleStop(); onClick(e);}}>
               Stop
              </div>

            
          </div>
        </div>
      </div>
      </Container>
     
    </div>
  );
}

export default Timer;
