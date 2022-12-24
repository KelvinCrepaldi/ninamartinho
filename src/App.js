import GlobalStyle from "./styles/global";
import Home from "pages/Home";
import backgroundvideo from "./assets/background.mp4";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Nina Martinho";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <video
        className="background-video"
        src={backgroundvideo}
        autoPlay
        loop
        muted
      ></video>
      <Home></Home>
    </>
  );
};

export default App;
