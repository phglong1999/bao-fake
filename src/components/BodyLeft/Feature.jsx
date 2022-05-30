import React from "react";
import "./Feature.scss";
import { removeCDATA, getTime } from "../../utils/rss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Feature({ rss }) {
  return (
    <div className="feature">
      {rss &&
        rss.slice(8, 12).map((item) => (
          <div className="article">
            <a style={{ marginRight: "20px" }} href={item.link}>
              <img src={item.image} alt="" />
            </a>
            <div className="article-content">
              <a href={item.link}>{removeCDATA(item.title)}</a>
              <p className="time" style={{ height: "21px" }}>
                {getTime(rss[0].pubDate)} -
                <FontAwesomeIcon
                  style={{ alignSelf: "center", margin: "0 5px" }}
                  icon={faComment}
                />
                1
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
