import React, { useState } from "react";
import "./App.css";
import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

export const RandContex = React.createContext(null);

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dollarToRand, setDollarToRand] = useState(19.06);
  //Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (p) => p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={crypto.randomUUID()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const results = filteredData(products, selectedCategory, query);

  return (
    <>
      <RandContex.Provider value={[dollarToRand]}>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleChange} />
        <Recommended handleClick={handleClick} />
        <Products results={results} />
      </RandContex.Provider>
    </>
  );
}

export default App;
