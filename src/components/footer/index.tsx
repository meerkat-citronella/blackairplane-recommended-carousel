import react from "React";
import { OrangeLogo } from "../../static/icons";
import { SocialIcons } from "./functions";
import "./style.scss";

interface FooterNavProps {
  title: string;
  linkTitles: string[];
}

const FooterNav = ({ title, linkTitles }: FooterNavProps) => {
  return (
    <div className="footer-nav-container-inner">
      <div className="nav-title">{title}</div>
      <br />
      <ul>
        {linkTitles.map((linkTitle, i) => (
          <li key={i}>{linkTitle}</li>
        ))}
      </ul>
    </div>
  );
};

const BrandAnchor = () => {
  return (
    <div className="anchor-container">
      <OrangeLogo color="secondary" />
      <div className="brand-signature">
        © 2020 The reThink Group, Inc. | All Rights Reserved | Legal Privacy
        Terms
      </div>
      <SocialIcons
        socials={["Facebook", "Twitter", "Instagram", "Pinterest", "YouTube"]}
      />
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-nav-container">
        <FooterNav
          title="The Legal Stuff"
          linkTitles={[
            "Legal",
            "Terms & Conditions",
            "Return Policy",
            "Privacy Policy",
          ]}
        />
        <FooterNav
          title="A Little More Info"
          linkTitles={["Licensing", "Orange Apps", "Contact Us", "FAQ"]}
        />
      </div>
      <BrandAnchor />
    </div>
  );
};
