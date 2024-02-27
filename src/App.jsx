import "./App.css";
import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";

function App() {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
