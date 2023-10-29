// import styles from './online.module.css'

// export default function Online({user}) {
//   return (
//     <li className="rightbarFriend">
//       <div className="rightbarProfileImgContainer">
//         <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
//         <span className="rightbarOnline"></span>
//       </div>
//       <span className="rightbarUsername">{user.username}</span>
//     </li>
//   );
// }

import React from 'react';
import onlineStyles from './online.module.css';

export default function Online({ user }) {
  return (
    <li className={onlineStyles.rightbarFriend}>
      <div className={onlineStyles.rightbarProfileImgContainer}>
        <img className={onlineStyles.rightbarProfileImg} src={user.profilePicture} alt="" />
        <span className={onlineStyles.rightbarOnline}></span>
      </div>
      <span className={onlineStyles.rightbarUsername}>{user.username}</span>
    </li>
  );
}

