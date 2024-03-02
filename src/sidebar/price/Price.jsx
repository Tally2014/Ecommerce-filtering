import React, { useContext } from "react";
import Input from "../../components/Input";
import { RandContex } from "../../App";

export default function Price({ handleChange }) {
  const [randValue, setRandValue] = useContext(RandContex);
  function InRands(dollar) {
    return Math.floor(dollar * randValue);
  }

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label onChange={handleChange} className="sidebar-label-container">
        <input type="radio" value="" name="price" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title={`R0 - ${InRands(50.0)}`}
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title={`R${InRands(50)} - ${InRands(100)}`}
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title={`R${InRands(100)} - ${InRands(150.0)}`}
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title={`Over R${InRands(200)}`}
        name="price"
      />
    </div>
  );
}
