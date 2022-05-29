import React from "react";
import "./Body.scss";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Loading from "./Loading";

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
        },
      });
      let jObj = parser.parse(res.data);
      console.log(jObj.rss.channel);
      setRss(jObj.rss.channel.item);
      setLoading(false);
    }
    getRss();
  }, []);
  function removeCDATA(str) {
    return str.replace("<![CDATA[ ", "").replace(" ]]>", "");
  }

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
    <div className="body">
      {loading && <Loading />}
      {!loading && (
        <div className="container">
          <div className="hot-news">
            <div className="left">
              <div className="hightlight">
                <a href={rss[0].link}>
                  <img src={rss[0].image} alt="" />
                </a>
                <div className="test" style={{ padding: "18px" }}>
                  <a className="title" href={rss[0].link}>
                    {/* {rss[0].title} */}
                    Nông dân thiệt thòi nhất khi giá phân bón, thức ăn chăn nuôi
                    tăng phi mã
                  </a>
                  <p className="time">{getTime(rss[0].pubDate)}</p>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      )}
    </div>
  );
}
