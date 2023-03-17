import React, { useState, useEffect } from "react";
import withtimeTaken from "./HOC/TimeTaken/withTimeTaken";

const HocScreenWidth = (props) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {showComponent && (
        <div>
          <h1>My screen width is {props.screenWidth}</h1>
        </div>
      )}
    </>
  );
};
const TimeTakenScreenWidth = withtimeTaken(HocScreenWidth);

export default TimeTakenScreenWidth;
