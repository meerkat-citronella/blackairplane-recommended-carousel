import React from "react";
import { SvgIcon } from "./../../static/icons";

export interface PageProps {
  bookName: string;
}

interface PriceProps {
  salePrice: number;
  marketPrice: number;
}

interface SocialShareButtonsProps {
  socials: string[];
}

interface MoreDetailsProps {
  name: string;
}

export const PagePath = ({ bookName }: PageProps) => (
  <div className="page-path">
    <SvgIcon iconName={"Home"} />
    <span>
      {" / Leaders / Books / "}
      {bookName}
    </span>
  </div>
);

export const Price = ({ salePrice, marketPrice }: PriceProps) => (
  <div className="price-container">
    <h4>${salePrice.toFixed(2)}</h4>
    <div>Market Price - ${marketPrice.toFixed(2)}</div>
  </div>
);

export const AddToCart = () => (
  <div className="add-to-cart-container">
    <div className="quantity">
      <span>Qty</span>
      <input type="number" defaultValue={1} />
    </div>
    <button>Add To Cart</button>
  </div>
);

export const SocialShareButtons = ({ socials }: SocialShareButtonsProps) => (
  <div className="social-container">
    <div>Share</div>
    <div className="social-buttons-container">
      {socials.map((social) => (
        <SvgIcon iconName={social} />
      ))}
    </div>
  </div>
);

export const MoreDetails = ({ name }: MoreDetailsProps) => (
  <div className="more-details">
    <div>{name}</div>
    <SvgIcon iconName={"Plus Sign"} />
  </div>
);
