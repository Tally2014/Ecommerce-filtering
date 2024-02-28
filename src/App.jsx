import { useState } from "react";
import "./App.css";
import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (p) => p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  console.log(filteredItems);

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
