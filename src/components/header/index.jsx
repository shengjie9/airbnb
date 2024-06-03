import React, { memo, useEffect, useState } from "react";
import { HeaderWapper } from "./style";
import IconLogo from "../../assets/svg/icon_logo";
import IconProfile from "../../assets/svg/icon_profile";
import IconMenu from "../../assets/svg/icon_menu";
import IconGlobal from "../../assets/svg/icon_global";
import IconSearchBar from "../../assets/svg/icon_search-bar";

const Header = memo(() => {
  const [panelState, setPanelState] = useState(false);
  useEffect(() => {
    const fn = () => setPanelState(false);
    window.addEventListener("click", fn);
    return () => window.removeEventListener("click", fn);
  }, []);

  const changePanel = (event) => {
    event.stopPropagation();
    setPanelState(true);
  };

  return (
    <HeaderWapper>
      <div className="left">
        <IconLogo />
      </div>
      <div className="center">
        <div className="search_bar">
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="btns">
          <span className="text_btn">登录</span>
          <span className="text_btn">注册</span>
          <span className="text_btn">
            <IconGlobal />
          </span>
        </div>

        <div className="btn" onClick={changePanel}>
          <IconMenu style={{ color: "red" }} />

          <div className="profile">
            <IconProfile size="32" />
          </div>
        </div>

        {panelState && (
          <div className="panel">
            <div className="top">
              <div className="item registor">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderWapper>
  );
});

export default Header;
