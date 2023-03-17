import { AboutBox, Container } from "../../components/modules";
import "./about.css";
import { aboutData } from "../../data/aboutData";

function About() {
  return (
    <div className="about">
      <Container>
        <div className="top">
          <h1 className="about-title"> Why choose Easybank?</h1>
          <p className="about-text">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="bottom">
          {aboutData.map((elt) => (
            <AboutBox key={elt.id} elt={elt} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default About;
