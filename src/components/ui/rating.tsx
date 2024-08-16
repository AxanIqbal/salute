"use client";

import React from "react";
import CRating, { RatingComponentProps } from "react-rating";
import StarIcon from "@/assets/svg/star.svg";
import StarFilledIcon from "@/assets/svg/star-filled.svg";

interface IRating extends RatingComponentProps {}

function Rating({ ...props }: IRating) {
  return (
    // @ts-ignore
    <CRating
      emptySymbol={<StarIcon />}
      fullSymbol={<StarFilledIcon />}
      {...props}
    />
  );
}

export default Rating;
