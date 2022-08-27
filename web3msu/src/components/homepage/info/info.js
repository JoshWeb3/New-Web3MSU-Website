import "./info.css";

import blockchain from "../../../assets/blockchain.png";
import government from "../../../assets/government.png";
import brain from "../../../assets/brain.png";
import event from "../../../assets/event.png";

import presentation from "../../../assets/presentation.jpg";

export const Info = () => {
  return (
    <div>
      <div className="infoTitle">
        <br />
        <h1>What we do</h1>
      </div>
      <div className="container">
        <div className="infoCaption">
          <img className="infoIcons" src={blockchain} />
          <br />
          <h4>Research</h4>
          Research and Develop Blockchain Technology
        </div>

        <div className="infoCaption">
          <img className="infoIcons" src={brain} />
          <h4>Educate</h4>
          Provide resources for individuals who are interested in learning about
          Blockchain and Cryptocurrency
        </div>

        <div className="infoCaption">
          <img className="infoIcons" src={event} />
          <br />
          <h4>Events</h4>
          Host Guest Speakers and Hackathons
        </div>

        <div className="infoCaption">
          {" "}
          <img className="infoIcons" src={government} />
          <h4>Governance</h4>
          Participate in DAO governance decisions
        </div>
        <div></div>
      </div>
    </div>
  );
};
