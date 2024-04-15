import "./play.css";

function Comment() {
  return (
    <div id="v-comment-prnt">
      <div id="v-comment">
        <form action="">
          <input type="text" name="video-cmt" id="video-cmt" placeholder="Comment" />
          <button>send</button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
