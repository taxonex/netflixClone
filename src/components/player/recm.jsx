import React, { useState, useEffect } from "react";
import Show from "../cards/movie";
import { InfiDTapi } from "../data/cardData";
import "../cards/moredata.css";
import { Link } from "react-router-dom";

function MoreActionTWO({ backMe }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const newData = InfiDTapi.slice(startIndex, endIndex);
      setData((prevItem) => [...prevItem, ...newData]);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.StrictMode>
      <div id="more-dto">
        {data.map((show) => (
          <div id="child-more-dto">
            <Show key={show.Name} name={show.Name} imageURL={show.ImageUrl} />
            <div id="DTtitl">
              <p>({show.Name})</p>
              <p className="detail">
                <b>Detail:-</b>
                {show.Details}
              </p>
              <p className="DateCD">{show.Period}</p>
            </div>
            <span id="openBtnonvdeo">...</span>
          </div>
        ))}
        {loading && <p id="load">Loading...</p>}
      </div>
    </React.StrictMode>
  );
}

export default MoreActionTWO;
