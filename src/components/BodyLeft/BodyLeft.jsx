import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./BodyLeft.scss";
import Feature from "./Feature";
import { getTime } from "../../utils/rss";
import HotNews from "./HotNews";

export default function BodyLeft({ rss }) {
  return (
    <div className="left flex">
      <div className="hightlight">
        <a href={rss[0].link}>
          <img src={rss[0].image} alt="" />
        </a>
        <div className="test" style={{ padding: "18px" }}>
          <a className="title" href={rss[0].link}>
            {rss[0].title}
          </a>
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
      <Feature rss={rss}></Feature>
      <HotNews rss={rss}></HotNews>
    </div>
  );
}
