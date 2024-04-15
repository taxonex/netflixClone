import React, { useState } from "react";
import "./play.css";
import Download from "./download";
import Share from "./ShareUrl";
import MoreActionTWO from "./recm";
import Comment from "./comment";
import Scifi from "../cards/sifidata";
import MoreAction from "../cards/morefetch";
import { useParams } from "react-router-dom";
import { InfiDTapi } from "../data/cardData";

function Video({ Date, Views, Like, disLike, Title }) {
  const [shareCheck, setshareCheck] = useState(false);
  const [downCheck, setsdownCheck] = useState(false);
  const { videoID } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const shareOn = () => {
    setshareCheck(true);
  };
  const download = () => {
    setsdownCheck(true);
  };
  const backshare = () => {
    setshareCheck(false);
    setsdownCheck(false);
  };

  const getVideoAPI = (Vid) => {
   
    const videoFound = InfiDTapi.find((product) => product.Name === Vid);
    if (videoFound) {
      // console.log("Video found:", productFound);
      return videoFound;
    } else {
      // console.log("Video not found for:", Vid);
      return null;
    }
  };

  const CheckInAPI = getVideoAPI(videoID);
  // console.log(CheckInAPI, "rohit");

  const CommentV =()=>{
    setIsVisible((prevVisibility) => !prevVisibility);
  }
  return (
    <>
      {CheckInAPI ? (
        <div id="SV-cont">
          <div id="vide-sliper">
            <div id="Dvide1">
              <div id="video-container">
                <div id="video-in">
                  <div id="start-Video">
                    <video src={CheckInAPI.videoUrl} autoPlay controls></video>
                  </div>
                  <div id="video-info">
                    <span id="vido-status">
                      <p>Views 356k</p>
                      <p>14 April 2023</p>
                    </span>
                    <span id="video-title">
                      <p>{CheckInAPI.videotitle}</p>
                    </span>
                    <div id="user-react">
                      <span id="video-like">
                        <span>
                          <i class="fa-regular fa-thumbs-up"></i>
                          <p>3.5k</p>
                        </span>
                        <span>
                          <i class="fa-regular fa-thumbs-down"></i>
                          <p>1k</p>
                        </span>
                      </span>
                      <span id="share" onClick={shareOn}>
                        <i class="fa-solid fa-share"></i>
                        <p>Share</p>
                      </span>
                      <span id="downloadbtn" onClick={download}>
                        <i class="fa-solid fa-download"></i>
                        <p>Download</p>
                      </span>
                      <span id="CommentV" onClick={CommentV}>
                        <i class="fa-solid fa-comment"></i>
                      </span>
                    </div>
                  </div>
                </div>
                {shareCheck ? (
                  <Share
                    backshare={backshare}
                    url={CheckInAPI.videoUrl}
                    title={CheckInAPI.videotitle}
                  />
                ) : (
                  <></>
                )}
                {downCheck ? <Download backshare={backshare} /> : <></>}
              </div>
              <div
                id="comments"
                style={{ display: isVisible ? "none" : "flex" }}
              >
                <Comment />
              </div>
            </div>
            <div id="divE2">
              <MoreActionTWO />
            </div>
          </div>
        </div>
      ) : (
        <p>This time the page is not working</p>
      )}
    </>
  );
}
export default Video;
