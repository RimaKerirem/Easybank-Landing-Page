import "./about-box.css";

function AboutBox({ elt }) {
  return (
    <div className="box">
      <div className="box-image">
        <img src={elt.image} alt="" />
      </div>
      <h3 className="box-title">{elt.title}</h3>
      <p className="box-description">{elt.description}</p>
    </div>
  );
}

export default AboutBox;
