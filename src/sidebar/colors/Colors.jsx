import "./Colors.css";

export default function Colors() {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Colors</h2>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span> green
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span> white
        </label>
      </div>
    </>
  );
}
