import { useEffect, useState } from "react";

function ShwetaWorkComponent() {
  const [showWarning, setShowWarning] = useState(false);
  const [buttonCount, setButtonCount] = useState(0);
  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonCount(buttonCount + 1);
  };
  useEffect(() => {
    console.log(buttonCount);

    if (buttonCount === 3 || buttonCount === 4) {
      setShowWarning(true);
    }
  }, [buttonCount]);

  return (
    <div>
      {showWarning && <h1>This is the warning message</h1>}
      <button onClick={handleButtonClick}>ClickMe</button>
    </div>
  );
}
export default ShwetaWorkComponent;
