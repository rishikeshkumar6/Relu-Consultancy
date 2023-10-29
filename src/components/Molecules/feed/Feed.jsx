import Post from "../post/Post";
import Share from "../share/Share";
import feedStyles from './feed.module.css'; // Renamed styles import for feed
import { Posts } from "../../Atoms/Data/data";

export default function Feed() {
  return (
    <div className={feedStyles.feed}> 
      <div className={feedStyles.feedWrapper}> 
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

