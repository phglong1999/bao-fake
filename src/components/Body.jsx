import React from "react";
import "./Body.scss";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

export default function Body() {
  const [rss, setRss] = React.useState({});
  React.useEffect(() => {
    async function getRss() {
      const parser = new XMLParser();
      const res = await axios.get("https://thanhnien.vn/rss/home.rss");
      let jObj = parser.parse(res.data);
      console.log(jObj.rss.channel);
      setRss(jObj.rss.channel);
    }
    getRss();
  }, []);
  return (
    <div className="body">
      <div className="container flex">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <ul>
        {rss.item?.map((item, index) => (
          <li key={index}>{item.link}</li>
        ))}
      </ul>
    </div>
  );
}
