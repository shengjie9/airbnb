import React, { memo } from "react";
import footerData from "@/assets/data/footer.json";
import { FooterWapper } from "./style";

const Footer = memo(() => {
  console.log(footerData);
  return (
    <FooterWapper>
      <div className="wapper">
        <div className="content">
          {footerData?.map((item) => (
            <ul className="list" key={item.name}>
              <li className="list-title">{item.name}</li>

              {item.list?.map((subItem) => (
                <li className="list-item" key={subItem}>
                  {subItem}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWapper>
  );
});

export default Footer;
