function Download({ backshare }) {
  return (
    <div id="download-cont" onClick={backshare}>
      <div id="download">
        <span className="downhead">
          <h1>Download</h1>
        </span>
        <div id="downloadoption">
          <span>
            <p>144p Download</p>
            <p>085MB</p>
          </span>
          <span>
            <p>240p Download</p>
            <p>150MB</p>
          </span>
          <span>
            <p>360p Download</p>
            <p>214MB</p>
          </span>
          <span>
            <p>480p Download</p>
            <p>310MB</p>
          </span>
          <span>
            <p>720p Download</p>
            <p>355MB</p>
          </span>
          <span>
            <p>1020p Download</p>
            <p>464MB</p>
          </span>
          <span>
            <p>2k Download</p>
            <p>703MB</p>
          </span>
        </div>
        <div id="downloadBTN">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}
export default Download;
