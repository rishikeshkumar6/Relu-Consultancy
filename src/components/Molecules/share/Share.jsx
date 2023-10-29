// import styles from "./share.module.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

// export default function Share() {
//   return (
//     <div className="share">
//       <div className="shareWrapper">
//         <div className="shareTop">
//           <img className="shareProfileImg" src="/assets/person/rishu.jpeg" alt="" />
//           <input
//             placeholder="What's in your mind Rishikesh?"
//             className="shareInput"
//           />
//         </div>
//         <hr className="shareHr"/>
//         <div className="shareBottom">
//             <div className="shareOptions">
//                 <div className="shareOption">
//                     <PermMedia htmlColor="tomato" className="shareIcon"/>
//                     <span className="shareOptionText">Photo or Video</span>
//                 </div>
//                 <div className="shareOption">
//                     <Label htmlColor="blue" className="shareIcon"/>
//                     <span className="shareOptionText">Tag</span>
//                 </div>
//                 <div className="shareOption">
//                     <Room htmlColor="green" className="shareIcon"/>
//                     <span className="shareOptionText">Location</span>
//                 </div>
//                 <div className="shareOption">
//                     <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
//                     <span className="shareOptionText">Feelings</span>
//                 </div>
//             </div>
//             <button className="shareButton">Share</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import styles from "./share.module.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img className={styles.shareProfileImg} src="/assets/person/rishu.jpeg" alt="" />
          <input
            placeholder="What's in your mind Rishikesh?"
            className={styles.shareInput}
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia htmlColor="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <Label htmlColor="blue" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <Room htmlColor="green" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotions htmlColor="goldenrod" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}

