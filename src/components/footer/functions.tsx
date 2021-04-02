import React from "react";
import { SvgIcon } from "../../static/icons";

interface SocialIconsProps {
  socials: string[];
}

export const SocialIcons = ({ socials }: SocialIconsProps) => {
  return (
    <div className="social-icons">
      {socials.map((social) => (
        <a href="/">
          <SvgIcon iconName={social} color="secondary" />
        </a>
      ))}
    </div>
  );
};
