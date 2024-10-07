import React, { useState, useEffect } from 'react';
import "./styles/App.trafficLight.css"

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    let timer;
    switch (light) {
      case 'red':
        timer = setTimeout(() => setLight('yellow'), 3000);
        break;
      case 'yellow':
        timer = setTimeout(() => setLight('green'), 1000);
        break;
      case 'green':
        timer = setTimeout(() => setLight('red'), 3000);
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light ${light === 'red' ? 'red' : ''}`} />
      <div className={`light ${light === 'yellow' ? 'yellow' : ''}`} />
      <div className={`light ${light === 'green' ? 'green' : ''}`} />
    </div>
  );
};

export default TrafficLight;