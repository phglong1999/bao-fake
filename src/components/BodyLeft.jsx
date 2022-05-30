import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./BodyLeft.scss";

export default function BodyLeft({ rss }) {
  //   function removeCDATA(str) {
  //     return str.replace("<![CDATA[ ", "").replace(" ]]>", "");
  //   }

  function getTime(str) {
    console.log(str);
    let date = new Date(str);
    let x = (Date.now() - date.getTime()) / 1000 / 60 / 60;
    if (x < 1) {
      return parseInt(x * 60) + " phút trước";
    } else {
      return parseInt(x) + " giờ trước";
    }
  }
  return (
    <div className="left">
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
    </div>
  );
}
