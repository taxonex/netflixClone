import React, { useRef, useState } from "react";
import "./categories.css";

const CategorySection = () => {
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
    <div id="category">
      <div
        className="category-container"
        ref={categoryContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="category">Action</div>
        <div className="category">Adventure</div>
        <div className="category">Anime</div>
        <div className="category">Cartoon</div>
        <div className="category">Children </div>
        <div className="category">Classic</div>
        <div className="category">Comedies</div>
        <div className="category">Documentaries</div>
        <div className="category">Dramas</div>
        <div className="category">Family</div>
        <div className="category">Fantasy</div>
        <div className="category">Horror</div>
        <div className="category">Music</div>
        <div className="category">Romantic</div>
        <div className="category">Scifi</div>
        <div className="category">Sports</div>
        <div className="category">Thrillers</div>
        <div className="category">TVShows</div>
        <div className="category">NewRelease</div>
        <div className="category">Movie</div>
        <div className="category">Netflix</div>
        <div className="category">DisneyHotstar</div>
        <div className="category">Prime</div>
        <div className="category">SonyLiv</div>
      </div>
    </div>
  );
};

export default CategorySection;
