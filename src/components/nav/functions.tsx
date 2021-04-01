import React from "react";
import { SvgIcon } from "./../../static/icons";

interface TabProps {
  tabName: string;
  selected?: boolean;
}

interface ButtonProps {
  buttonName: string;
  iconName?: string;
}

export const Tab = ({ tabName, selected }: TabProps) => {
  return (
    <div className={`nav-tab ${selected ? "selected-tab" : ""}`}>{tabName}</div>
  );
};

export const Button = ({ buttonName, iconName }: ButtonProps) => {
  return (
    <button>
      {buttonName}
      {iconName && <SvgIcon iconName={iconName} />}
    </button>
  );
};

export const MenuDropdown = ({ buttonName }: ButtonProps) => {
  return (
    <button>
      {buttonName}
      {buttonName !== "About" && <SvgIcon iconName={"Chevron Down"} />}
    </button> // the 'About' tab doesn't have a dropdown icon.
  );
};
