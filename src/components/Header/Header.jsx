import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPuzzlePiece,
  faLayerGroup,
  faBriefcase,
  faMagnifyingGlass,
  faLightbulb,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top flex">
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faBars} />
          <p>Chuyên mục</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faPuzzlePiece} />
          <p>Tiện ích</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faLayerGroup} />
          <p>Dành cho bạn</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <p>Việc làm</p>
        </a>
        <a className="site-header" href="/">
          <img src="./TNO_logo2.svg" alt="" />
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <p>Tìm kiếm</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <p>Bạn cần biết</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          <p>Liên hệ</p>
        </a>
        <a className="item" href="/">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <p>Đăng nhập</p>
        </a>
      </div>
      <div className="header-bottom flex">
        <a href="/">VIDEO</a>
        <a href="/">THỜI SỰ</a>
        <a href="/">THẾ GIỚI</a>
        <a href="/">TÀI CHÍNH - KINH DOANH</a>
        <a href="/">ĐỜI SỐNG</a>
        <a href="/">VĂN HÓA</a>
        <a href="/">GIẢI TRÍ</a>
        <a href="/">GIỚI TRẺ</a>
        <a href="/">GIÁO DỤC</a>
        <a href="/">THỂ THAO</a>
        <a href="/">SỨC KHỎE</a>
        <a href="/">CÔNG NGHỆ - GAME</a>
        <a href="/">XE</a>
        <a href="/">THỜI TRANG TRẺ</a>
        <a href="/">BẠN ĐỌC</a>
<a href="/">BẠN ĐỌC</a>
      </div>
    </div>
  );
}
