import "./App.css";

import { useEffect, useState } from "react";

import { Header, Hero } from "./sections";

const App = () => {
  const [viewHeight, setViewHeight] = useState("100vh");

  useEffect(() => {
    function resetHeight(){
      // reset the body height to that of the inner browser
      setViewHeight(window.innerHeight + "px");
    }

    // reset the height whenever the window's resized
    window.addEventListener("resize", resetHeight);

    // called to initially set the height.
    resetHeight();

    return () => window.removeEventListener('resize', resetHeight);
  }, [])

  return (
    <>
      <Header 
        viewHeight={viewHeight}
      />
      <Hero 
        viewHeight={viewHeight}
      />
    </>
  )
}

export default App