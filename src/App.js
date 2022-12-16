import Menu from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer.styles";
const App = () => {
  return (
    <>
      <Menu>asdasd</Menu>
      <section className="main-content">
        <h1>title h1</h1>
        <h2>title h2</h2>
        <h3>title h3</h3>
        <p>paragraph</p>
        <span>span</span>
        <ul>
          ulist
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
        </ul>
      </section>
      <Footer></Footer>
    </>
  );
};

export default App;
