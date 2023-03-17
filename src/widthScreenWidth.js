import { useEffect, useState } from "react";

const widthScreenWidth = (WrappedComponent) => (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <WrappedComponent screenWidth={screenWidth} {...props} />;
};

export default widthScreenWidth;
