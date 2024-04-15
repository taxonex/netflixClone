import Show from "./movie";
import React, { useRef, useState } from "react";
import "./cards.css";
import { ScifiData } from "../data/cardData";

function Scifi({ callMe }) {
  const categoryContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - categoryContainerRef.current.offsetLeft);
    setScrollLeft(categoryContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - categoryContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    categoryContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <React.StrictMode>
      <div id="scifi" className="card-prnt">
        <div id="cardTitle">
          <h3>Scifi</h3>
          <abbr title="More SciFi Movies">
            <h5 onClick={callMe}>More..</h5>
          </abbr>
        </div>
        <div
          className="shows"
          ref={categoryContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {ScifiData.map((show) => {
            const startedFrom = show.Period.split("-")[0].slice(1);
            let till = show.Period.split("-")[1].slice(0, -1);

            if (till.length < 2) {
              till = "PRESENT";
            }

            return (
              <Show
                key={show.Name}
                imageURL={show.ImageUrl}
                name={show.Name}
                rating={show.Rating}
                startedFrom={startedFrom}
                till={till}
              />
            );
          })}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Scifi;
