import "./footer.css";

import email from "../../assets/email.png";
import location from "../../assets/location.png";
import discord from "../../assets/disc.png";
import twitter from "../../assets/twit.png";
import linkedin from "../../assets/linkedinlogo.png";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <br />

        <div className="alignLink">
          <img class="footerIcon" src={location} />
          <div className="footerInline">Montclair State University</div>
        </div>
        <br />
        <div className="alignLink">
          <img class="footerIcon" src={email} />
          <div className="footerInline">Web3MSU@Gmail.com</div>
        </div>
        <div className="footerInline">
          <a className="noDeco" href="https://discord.gg/6SGCxcaA">
            <img class="footerIcon" src={discord} />
          </a>
          <a className="noDeco" href="https://twitter.com/Web3MSU">
            <img class="footerIcon" src={twitter} />
          </a>
          <a
            className="noDeco"
            href="https://www.linkedin.com/company/web3msu/"
          >
            <img className="footerIcon" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
