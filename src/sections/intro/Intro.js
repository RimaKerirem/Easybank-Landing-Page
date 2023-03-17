import "./intro.css";
import { RequestButton } from "../../components/modules";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <h1 className="intro-title">Next generation digital banking</h1>
        <p className="intro-text">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestButton />
      </div>
      <div className="intro-image">
        <img src="/images/image-mockups.png" alt="" />
      </div>
    </div>
  );
}

export default Intro;
