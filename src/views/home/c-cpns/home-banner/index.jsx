import React, { memo } from "react";
import { HomeBannerWapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <HomeBannerWapper>
      <div className="banner"></div>
    </HomeBannerWapper>
  );
});

export default HomeBanner;
