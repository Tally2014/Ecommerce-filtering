import "./Colors.css";
import Input from "../../components/Input";

export default function Colors({ handleChange }) {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Colors</h2>
        <label onChange={handleChange} className="sidebar-label-container">
          <input type="radio" name="colors" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          onChange={handleChange}
          value="black"
          title="Black"
          name="colors"
          color="black"
        />
        <Input
          onChange={handleChange}
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />
        <Input
          onChange={handleChange}
          value="red"
          title="Red"
          name="colors"
          color="red"
        />
        <Input
          onChange={handleChange}
          value="green"
          title="Green"
          name="colors"
          color="green"
        />
        <label onChange={handleChange} className="sidebar-label-container">
          <input type="radio" name="colors" value="white" />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
}
