import React from "react";
import { Tab, Button, MenuDropdown } from "./functions";
import { SvgIcon, OrangeLogo } from "./../../static/icons";
import "./style.scss";

interface NavProps {
  selectedTab: string;
}

const TopBar = ({ selectedTab }: NavProps) => {
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

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-container-buttons">
        <div className="logo-wrapper">
          <a href="/">
            <OrangeLogo color="primary" />
          </a>
        </div>
        <MenuDropdown buttonName={"Shop Curriculum"} />
        <MenuDropdown buttonName={"Events"} />
        <MenuDropdown buttonName={"Leadership"} />
        <MenuDropdown buttonName={"Parenting"} />
        <MenuDropdown buttonName={"Music"} />
        <MenuDropdown buttonName={"Resources"} />
        <MenuDropdown buttonName={"About"} />
      </div>
      <div>
        <SvgIcon iconName={"Search"} />
      </div>
    </div>
  );
};

export const Nav = ({ selectedTab }: NavProps) => {
  return (
    <div>
      <TopBar selectedTab={selectedTab} />
      <Menu />
    </div>
  );
};
