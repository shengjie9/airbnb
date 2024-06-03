import React, { memo, useEffect } from "react";
import { HomeWapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceInfo } from "../../store/modules/home";
import SectionHeader from "../../components/section-header";
import RoomItem from "../../components/room-item";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfo());
  }, [dispatch]);

  const { goodsPriceInfo } = useSelector(
    (state) => ({
      goodsPriceInfo: state.home.goodsPriceInfo,
    }),
    shallowEqual
  );
  return (
    <HomeWapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodsPriceInfo.title} />
        </div>
        <ul className="good-list">
          {goodsPriceInfo.list?.slice(0,8)?.map((item) => (
            <RoomItem itemObj={item} key={item.id} />
          ))}
        </ul>
      </div>
    </HomeWapper>
  );
});

export default Home;
