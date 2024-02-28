import "./Price.css";
import Input from "../../components/Input";

export default function Price() {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </>
  );
}
