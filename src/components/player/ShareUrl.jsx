import React, { useRef } from "react";
import "./share.css";

function Share({ url, title, backshare }) {
  const CopyUrl = useRef(null);

  const copyClipboard = () => {
    if (CopyUrl.current) {
      CopyUrl.current.select();
      document.execCommand("copy");
      alert("Copied");
    }
  };

  const handleShare = (platform) => {
    let shareUrl = "";
    let platformName = "";

    switch (platform) {
      case "facebook":
        platformName = "Facebook";
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        platformName = "Twitter";
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "whatsapp":
        platformName = "WhatsApp";
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          title + " " + url
        )}`;
        break;
      case "instagram":
        platformName = "instagram";
        shareUrl = `https://www.instagram.com/create/caption/?text=${encodeURIComponent(
          title
        )}`;
        break;
      default:
        console.log("Unsupported platform");
        break;
    }

    // Open the share URL in a new window
    window.open(shareUrl, "_blank");
  };

  return (
    <div id="share-con" onClick={backshare}>
      <div id="shar">
        <div id="share-head">
          <h1>Share</h1>
        </div>
        <div id="share-link">
          <input type="text" ref={CopyUrl} value={url} readOnly />
          <button className="sbtyle" onClick={copyClipboard}>
            COPY URL
          </button>
        </div>
        <div id="share-platform">
          <button onClick={() => handleShare("facebook")}>
            <i class="fa-brands fa-facebook" style={{ color: "blue" }}></i>
          </button>
          <button className="sbtyle" onClick={() => handleShare("twitter")}>
            <i class="fa-brands fa-square-x-twitter"></i>
          </button>
          <button className="sbtyle" onClick={() => handleShare("whatsapp")}>
            <i
              class="fa-brands fa-whatsapp"
              style={{
                color: "white",
                background: "green",
                borderRadius: "6px",
                padding: "3px",
                fontSize: "28px",
                height: "33px",
              }}
            ></i>
          </button>
          <button className="sbtyle" onClick={() => handleShare("instagram")}>
            <i
              class="fa-brands fa-instagram"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                color: "white",
                padding: "2px",
                paddingLeft:"3px",
                paddingRight:"3px",
                borderRadius: "9px",
              }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Share;
