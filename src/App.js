import GlobalStyle from "./styles/global";
import Home from "pages/Home";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Nina Martinho";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Home></Home>
    </>
  );
};

export default App;
