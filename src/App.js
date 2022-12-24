import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Nina Martinho";
  }, []);
  return (
    <>
      <GlobalStyle />
      <Home></Home>
    </>
  );
};

export default App;
