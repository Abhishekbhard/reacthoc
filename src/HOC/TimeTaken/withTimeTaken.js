import { useEffect, useState } from "react";

function withtimeTaken(WrapperComponent) {
  return function WithTimeTaken(props) {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [timeTaken, setTimeTaken] = useState(null);
    useEffect(() => {
      setStartTime(new Date());
      setTimeout(() => {
        setEndTime(new Date());
      }, 1000);
    }, [props]);
    useEffect(() => {
      if (endTime && startTime) {
        console.log(
          `Component '${WrapperComponent.name}' took ${
            endTime - startTime
          }ms to render`
        );

        setTimeTaken(endTime - startTime);
      }
    }, [endTime, startTime]);
    return (
      <div>
        <p>Time taken to rendered: {timeTaken} millisecond</p>

        <WrapperComponent {...props} />
      </div>
    );
  };
}
export default withtimeTaken;
