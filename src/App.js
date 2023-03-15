import GlobalStyle from "./styles/global";
import Home from "pages/Home";
import Background from "components/Background";
import stars1 from "./assets/bgstars1.png";
import stars2 from "./assets/bgstars2.png";
import backgroundimage from "./assets/bgcolor.webp";
import { useEffect } from "react";
import "./fonts/font.css";

const App = () => {
  useEffect(() => {
    document.title = "Nina Martinho";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Background speed={0.1} bgImage={stars1} />
      <Background speed={0.5} bgImage={stars2} />

      <Home></Home>
    </>
  );
};

export default App;
