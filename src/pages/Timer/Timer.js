import React, { useState, useRef } from 'react';
import './Timer.css';
import useTimer from '../../logic/useTimer';

const Stopwatch = () => {
    const { isRunning, timeElapsed, start, stop, reset, formatTime } = useTimer();

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-time">{formatTime(timeElapsed)}</div>
      <div className="stopwatch-buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
