import { BsFillBagHeartFill } from "react-icons/bs";
import { RandContex } from "../App";
import { useContext, useState } from "react";

export default function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  const [randValue] = useContext(RandContex);

  function InRands(dollar) {
    if (dollar.includes("$")) {
      return Math.floor(convertToDouble(dollar) * randValue);
    }
    return Math.floor(parseFloat(dollar) * randValue);
  }

  function convertToDouble(str) {
    // Remove the dollar sign and parse the string to a floating point number
    const number = parseFloat(str.replace("$", ""));
    // Round the number to two decimal places
    const roundedNumber = Math.round(number * 100) / 100;
    return roundedNumber;
  }

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{`R${InRands(prevPrice)}`}</del> {InRands(newPrice)}
            </div>

            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
