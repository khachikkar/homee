import "./Companies.css";
import logo from "../../img/logo.svg"

export default function Companies() {
  return (
    <div className="comp-sec">
      <h1>Our Partners</h1>
      <section className="company">
        <div className="comp">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="comp">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="comp">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="comp">
          <img src={logo} alt="" width={100} />
        </div>
      </section>
    </div>
  );
}