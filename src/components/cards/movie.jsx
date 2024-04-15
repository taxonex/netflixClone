import "./carddata";
import "./cards.css";
import { Link } from "react-router-dom";

function Show({
  imageURL,
  startedFrom,
  till,
  name,
  rating,
  videoUrl,
  chekClick,
}) {
  const onTop = ()=>{
  //  window.scrollTo({ top: 0, behavior: "smooth" });
   window.scrollY({top:0, behavior:"smooth"})
  }
  return (
    <abbr title="Watch This">
      <Link to={`/watch/${name}`} id="tans" draggable="false" onClick={onTop}>
        <div onClick={() => chekClick} id="carddymc">
          <img className="show-img" src={imageURL} alt="" />
          <p className="period">
            {startedFrom} {till}
          </p>
          <h2 className="title">{name}</h2>
          <p className="rating">
            <img
              src="https://images.vexels.com/media/users/3/151208/isolated/lists/a61b4830c6f330b4eb2a8db3a99ebc38-royal-crown-icon.png"
              alt=""
            />
            <span>Premium</span>
          </p>
        </div>
      </Link>
    </abbr>
  );
}

export default Show;
