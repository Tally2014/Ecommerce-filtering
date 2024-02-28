import "./Colors.css";
import Input from "../../components/Input";

export default function Colors({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title price-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="colors" value="" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="colors"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="colors"
          color="red"
        />
        <Input
          handleChange={handleChange}
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
