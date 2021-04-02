import React from "react";
import { SvgIcon } from "../../static/icons";
import "./style.scss";

interface DotProps {
  selected?: boolean;
}

interface IndicatorDotsProps {
  numberOfDots: number;
}

const Dot = ({ selected }: DotProps) => (
  <SvgIcon iconName={selected ? "Dot Selected" : "Dot Unselected"} />
);

export const IndicatorDots = ({ numberOfDots }: IndicatorDotsProps) => {
  return (
    <div className="indicator-dots-container">
      <Dot selected />
      {[...Array(numberOfDots - 1)].map((_, i) => (
        <Dot />
      ))}
    </div>
  );
};
