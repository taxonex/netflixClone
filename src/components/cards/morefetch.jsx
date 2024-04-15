import React, { useState, useEffect } from "react";
import Show from "./movie";
import { InfiDTapi } from "../data/cardData";
import "./moredata.css";

function MoreAction({ backMe }) {
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
      <div id="more-dt">
        <div id="moredb-head">
          <h1>More Movies</h1>
          <abbr title="Back to Home..">
            <h3 onClick={backMe}>back</h3>
          </abbr>
        </div>
        <div id="child-more-dt">
          {data.map((show) => (
            <Show
              key={show.Name}
              imageURL={show.ImageUrl}
              name={show.Name}
              rating={show.Rating}
              startedFrom={show.Period}
            />
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </React.StrictMode>
  );
}

export default MoreAction;
