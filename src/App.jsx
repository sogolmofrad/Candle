import { useEffect, useState } from "react";

// You can work here or download the template
const Candle = () => {
  const [height, setHeight] = useState(90);
  useEffect(
    function () {
      const reduceCandle = setInterval(() => {
        setHeight((curr) => curr - 5);
        if (height < 10) setHeight(90);
      }, 2000);
      return () => {
        clearInterval(reduceCandle);
      };
    },
    [height]
  );
  return (
    <div className="exercise">
      <div className="candleContainer">
        <div className="candle" style={{ height: `${height}%` }}>
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
