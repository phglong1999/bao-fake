import React from "react";
import "./HotNews.scss";
import { removeCDATA } from "../../utils/rss";

export default function HotNews({ rss }) {
  const list = rss?.slice(13, 18).map((item, index) => {
    if (index === 0) {
      return (
        <div className="news">
          <a href={item.link}>
            <img src={item.image} alt="" height={"150px"} width={"214px"} />
          </a>
          <a href={item.link}>
            <p>{removeCDATA(item.title)}</p>
          </a>
        </div>
      );
    } else
      return (
        <div className="news">
          <a href={item.link}>
            <p>{removeCDATA(item.title)}</p>
          </a>
        </div>
      );
  });
  return (
    <div className="hotNews">
      <div className="child-hotNews">{list}</div>
    </div>
  );
}
