import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sign from "./pages/userDetail/sign";
import E404 from "./pages/404";
import PlayVideo from "./components/player/play";
import Share from "./components/player/ShareUrl";
import Download from "./components/player/download";
import Vid from "./components/componentsFunctions/dtEntry";
import Portfolio from "./pages/portfolio/portfolio";

function AppContainer() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="sign-up" element={<Sign />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:Skillss" element={<Portfolio />} />
        <Route path="watch/:videoID" element={<PlayVideo />} />
        <Route path="share" element={<Share />} />
        <Route path="download" element={<Download />} />
        <Route path="vido" element={<Vid />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
export default AppContainer;
