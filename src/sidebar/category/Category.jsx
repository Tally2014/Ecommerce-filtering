import "./Category.css";
import Input from "../../components/Input";

export default function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}
