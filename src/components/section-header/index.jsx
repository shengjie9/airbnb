import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWapper>
      <h2 className="title">{title}</h2>
      {subTitle && <div className="subTitle">{subTitle}</div>}
    </HeaderWapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
