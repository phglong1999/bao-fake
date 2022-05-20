import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="header-bottom"></div>
    </div>
  );
}
