import postStyles from './post.module.css'; // Renamed the import to avoid a naming conflict
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../Atoms/Data/data";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className={postStyles.post}>
      <div className={postStyles.postWrapper}>
        <div className={postStyles.postTop}>
          <div className={postStyles.postTopLeft}>
            <img
              className={postStyles.postProfileImg}
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className={postStyles.postUsername}>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className={postStyles.postDate}>{post.date}</span>
          </div>
          <div className={postStyles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={postStyles.postCenter}>
          <span className={postStyles.postText}>{post?.desc}</span>
          <img className={postStyles.postImg} src={post.photo} alt="" />
        </div>
        <div className={postStyles.postBottom}>
          <div className={postStyles.postBottomLeft}>
            <img className={postStyles.likeIcon} src="assets/like.png" onClick={likeHandler} alt="" />
            <img className={postStyles.likeIcon} src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className={postStyles.postLikeCounter}>{like} people like it</span>
          </div>
          <div className={postStyles.postBottomRight}>
            <span className={postStyles.postCommentText}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
