import "./Products.css";
import Card from "../components/Card";

export default function Products({ results }) {
  return (
    <>
      <section className="card-container">{results}</section>
    </>
  );
}
