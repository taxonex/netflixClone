import React, { useState } from "react";
import "./index.css";
import Scifi from "./components/cards/sifidata";
import MoreAction from "./components/cards/morefetch";
import Navbar from "./components/header/header";
import CategorySection from "./components/categories/categories";
import Statuslider from "./components/status/statuslider";
import Shows from "./components/cards/carddata";
import Action from "./components/cards/actiondata";
import Horror from "./components/cards/horror";
import TVshow from "./components/cards/tvshow";
import Anime from "./components/cards/anime";
import Sports from "./components/cards/sports";
import Dramas from "./components/cards/dramas";
import Footer from "./components/footer/footer";

function App() {
  const [ condition, setCondition ] = useState(true);
  const handleClikePlay = () => {
    setCondition(false);
  };
  const handleClickBack = () => {
    setCondition(true);
  };
  return (
    <React.StrictMode>
      {condition ? (
        <>
          <Navbar />
          <Statuslider />
          <CategorySection />
          <Action callMe={handleClikePlay} />
          <Scifi callMe={handleClikePlay} />
          <Horror callMe={handleClikePlay} />
          <Anime callMe={handleClikePlay} />
          <TVshow callMe={handleClikePlay} />
          <Dramas callMe={handleClikePlay} />
          <Shows callMe={handleClikePlay} />
          <Sports callMe={handleClikePlay} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <MoreAction backMe={handleClickBack} />
        </>
      )}
    </React.StrictMode>
  );
}

export default App;
