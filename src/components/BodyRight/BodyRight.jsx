import React from "react";
import "./BodyRight.scss";
import { removeCDATA } from "../../utils/rss";

export default function BodyRight({ rss }) {
  function partDateTime(dt) {
    let date = dt.split(" ");
    return "" + date[4].slice(0, 5);
  }
  return (
    <div className="right flex">
      <div className="tab">
        <ul className="nav flex">
          <li>
            <p className="nav-link active">Tin mới</p>
          </li>
          <li>
            <p className="nav-link">Đọc nhiều</p>
          </li>
        </ul>
        <div className="tabContent">
          {rss &&
            rss.slice(0, 8).map((item, index) => (
              <article className="side-article flex">
                <p>{partDateTime(item.pubDate)}</p>
                <a href={item.link}>{removeCDATA(item.title)}</a>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
