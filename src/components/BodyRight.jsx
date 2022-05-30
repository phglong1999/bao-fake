import React from "react";
import "./BodyRight.scss";

export default function BodyRight(rss) {
  return (
    <div className="right">
      <div className="tab">
        <ul className="nav">
          <li>
            <p className="nav-link active">Tin mới</p>
          </li>
          <li>
            <p className="nav-link">Đọc nhiều</p>
          </li>
        </ul>
        <div className="tabContent">
          <article className="side-article"></article>
        </div>
      </div>
    </div>
  );
}
