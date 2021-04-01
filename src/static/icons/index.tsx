import React from "react";

interface SvgIconProps {
  iconName: string;
}

const ShoppingCartSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.3269 14.6538C7.01726 14.6538 7.5769 14.0942 7.5769 13.4038C7.5769 12.7135 7.01726 12.1538 6.3269 12.1538C5.63655 12.1538 5.0769 12.7135 5.0769 13.4038C5.0769 14.0942 5.63655 14.6538 6.3269 14.6538Z"
      fill="#333333"
    />
    <path
      d="M12.25 14.6538C12.9404 14.6538 13.5 14.0942 13.5 13.4038C13.5 12.7135 12.9404 12.1538 12.25 12.1538C11.5596 12.1538 11 12.7135 11 13.4038C11 14.0942 11.5596 14.6538 12.25 14.6538Z"
      fill="#333333"
    />
    <path
      d="M2 2H4.10988L5.5235 9.06282C5.57173 9.30566 5.70384 9.5238 5.8967 9.67906C6.08957 9.83431 6.33089 9.91679 6.57843 9.91204H11.7054C11.953 9.91679 12.1943 9.83431 12.3872 9.67906C12.58 9.5238 12.7121 9.30566 12.7604 9.06282L13.6043 4.63735H4.63735"
      stroke="#333333"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const SvgIcon = ({ iconName }: SvgIconProps) => {
  return <>{iconName === "Shopping Cart" ? <ShoppingCartSvg /> : null}</>;
};
