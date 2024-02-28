import "./Price.css";

export default function Price() {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>R0 - R1000
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>R1000 - R3000
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>R3000 - R5000
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span> Over R5000
        </label>
      </div>
    </>
  );
}
