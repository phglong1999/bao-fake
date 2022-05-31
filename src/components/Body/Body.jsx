import React from "react";
import "./Body.scss";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Loading from "../Loading/Loading";
import BodyLeft from "../BodyLeft/BodyLeft";
import BodyRight from "../BodyRight/BodyRight";

export default function Body() {
  const [rss, setRss] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function getRss() {
      const parser = new XMLParser();
      setLoading(true);
      const res = await axios.get("https://thanhnien.vn/rss/home.rss", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "upgrade-insecure-requests": 1,
        },
      });
      let jObj = parser.parse(res.data);
      console.log(jObj.rss.channel);
      setRss(jObj.rss.channel.item);
      setLoading(false);
    }
    getRss();
  }, []);
  return (
    <div className="body">
      {loading && <Loading />}
      {!loading && (
        <div className="container">
          <div className="hot-news flex">
            <BodyLeft rss={rss}></BodyLeft>
            <BodyRight rss={rss}></BodyRight>
          </div>
        </div>
      )}
    </div>
  );
}
