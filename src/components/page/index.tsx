import React from "react";
import { SvgIcon } from "../../static/icons";
import { IndicatorDots } from "../indicator_dots";
import {
  MoreDetails,
  PagePath,
  PageProps,
  Price,
  AddToCart,
  SocialShareButtons,
} from "./functions";
import { getImage } from "./../../static/images/index";
import "./style.scss";

interface DetailsProps {
  bookName: string;
  salePrice: number;
  marketPrice: number;
}

const Image = ({ bookName }: PageProps) => {
  return (
    <div className="image-container">
      <PagePath bookName={bookName} />
      <div className="image-container-inner">
        <button>
          <SvgIcon iconName={"Chevron Left"} />
        </button>
        <img src={getImage(bookName)} alt={`the book ${bookName}`} />
        <button>
          <SvgIcon iconName={"Chevron Right"} />
        </button>
      </div>
      <div className="dots-wrapper">
        <IndicatorDots numberOfDots={7} />
      </div>
    </div>
  );
};

const Details = ({ bookName, salePrice, marketPrice }: DetailsProps) => {
  return (
    <div className="details-container">
      <h3>{bookName}</h3>
      <Price salePrice={salePrice} marketPrice={marketPrice} />
      <p>
        Summary paragraph with 300 characters. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Volutpat ullamcorper id nunc quisque vel.
        Bibendum non pharetra tincidunt consectetur lectus vivamus pharetra in
        a. Diam senectus nisi, vel, interdum odio nibh. Imperdiet venenatis
        tellus quam tristique.
      </p>
      <AddToCart />
      <SocialShareButtons socials={["Facebook", "Twitter", "Pinterest"]} />
      <MoreDetails name={"Description"} />
      <MoreDetails name={"Bulk Pricing"} />
      <MoreDetails name={"Details"} />
    </div>
  );
};

export const Page = ({ bookName }: PageProps) => {
  return (
    <div className="page-container">
      <div className="item-container">
        <Image bookName={bookName} />
        <Details bookName={bookName} salePrice={17} marketPrice={19.99} />
      </div>
    </div>
  );
};
