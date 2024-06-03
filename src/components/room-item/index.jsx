import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWapper } from "./style";

const RoomItem = memo((props) => {
  const { itemObj } = props;
  return (
    <ItemWapper>
      <div className="inner">
        <div className="cover">
          <img src={itemObj.picture_url} alt="" />
        </div>

        <div className="desc">{itemObj.verify_info.messages?.join("·")}</div>
        <div className="name">{itemObj.name}</div>
        <div className="price">{itemObj.price_format}/晚</div>
      </div>
    </ItemWapper>
  );
});

RoomItem.propTypes = {
  itemObj: PropTypes.object,
};

export default RoomItem;
