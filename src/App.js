import "./App.css";
import About from "./components/About";
import { Footers } from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <Newsletter />
      <Footers />
    </div>
  );
}

export default App;
