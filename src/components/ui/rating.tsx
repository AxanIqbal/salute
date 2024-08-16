"use client";

import React, { SVGProps } from "react";
import CRating, { RatingComponentProps } from "react-rating";
import StarIcon from "@/assets/svg/star.svg";
import StarFilledIcon from "@/assets/svg/star-filled.svg";

interface IRating extends RatingComponentProps {
  iconProps?: SVGProps<SVGElement>;
}

function Rating({ iconProps, ...props }: IRating) {
  return (
    // @ts-ignore
    <CRating
      emptySymbol={<StarIcon {...iconProps} />}
      fullSymbol={<StarFilledIcon {...iconProps} />}
      {...props}
    />
  );
}

export default Rating;
