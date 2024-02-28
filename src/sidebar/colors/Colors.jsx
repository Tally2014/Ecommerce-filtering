import "./Colors.css";
import Input from "../../components/Input";

export default function Colors() {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Colors</h2>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>All
        </label>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </>
  );
}
