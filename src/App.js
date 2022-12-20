import RoutesPatchs from "./routes";
import GlobalStyle from "./styles/global";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Nina Martinho";
  }, []);
  return (
    <>
      <GlobalStyle />
      <RoutesPatchs />
    </>
  );
};

export default App;
