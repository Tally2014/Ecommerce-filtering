import "./Sidebar.css";
import Catergory from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

export default function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>👟</h1>
        </div>
        <Catergory />
        <Price />
        <Colors />
      </section>
    </>
  );
}
