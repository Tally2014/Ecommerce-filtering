import "./Recommended.css";

export default function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button onClickHandler={handleClick} className="btns">
            All Products
          </button>
          <button onClickHandler={handleClick} className="btns">
            Nike
          </button>
          <button onClickHandler={handleClick} className="btns">
            Adidas
          </button>
          <button onClickHandler={handleClick} className="btns">
            Puma
          </button>
          <button onClickHandler={handleClick} className="btns">
            Vans
          </button>
        </div>
      </div>
    </>
  );
}
