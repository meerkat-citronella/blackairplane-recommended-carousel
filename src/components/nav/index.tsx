import React from "react";
import { Tab, Button } from "./functions";
import "./style.scss";

interface NavProps {
  selectedTab: string;
}

export const TopBar = ({ selectedTab }: NavProps) => {
  return (
    <div className="top-bar-container">
      <div className="tabs-container">
        <Tab
          tabName={"My Dashbboard"}
          selected={selectedTab === "My Dashboard"}
        />
        <Tab
          tabName={"Orange Store"}
          selected={selectedTab === "Orange Store"}
        />
      </div>
      <div className="tabs-container">
        <Button buttonName={"Contact Us"} />
        <Button buttonName={"Sign In"} />
        <Button buttonName={"Sign Up"} />
        <Button buttonName={"Cart"} iconName={"Shopping Cart"} />
      </div>
    </div>
  );
};

const Menu = ({ selectedTab }: NavProps) => {
  return null;
};

export const Nav = ({ selectedTab }: NavProps) => {
  return (
    <div>
      <TopBar selectedTab={selectedTab} />
      <Menu selectedTab={selectedTab} />
    </div>
  );
};
