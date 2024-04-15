import React, { useState, useEffect } from "react";

const Vid = () => {
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          "https://videos.pexels.com/video-files/19757074/19757074-uhd_3840_2160_30fps.mp4"
        ); // Replace with your MP4 video URL
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      } catch (error) {
        console.log("Error fetching video data:", error);
      }
    };

    fetchVideoData();

    // Clean up the Blob URL when the component unmounts
    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return <div>{blobUrl && <video src={blobUrl} controls />}</div>;
};

export default Vid;
