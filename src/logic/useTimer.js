import { useState, useRef } from 'react';

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - timeElapsed;
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setTimeElapsed(elapsedTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return {
    isRunning,
    timeElapsed,
    start,
    stop,
    reset,
    formatTime,
  };
};

export default useTimer;
