// import styles from "./rightbar.module.css";
// import { Users } from "../../Atoms/Data/data";
// import Online from "../online/Online";

// export default function Rightbar({ profile }) {
//   const HomeRightbar = () => {
//     return (
//       <>
//         <div className="birthdayContainer">
//           <img className="birthdayImg" src="assets/gift.png" alt="" />
//           <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
//           </span>
//         </div>
//         <img className="rightbarAd" src="assets/ad.png" alt="" />
//         <h4 className="rightbarTitle">Online Friends</h4>
//         <ul className="rightbarFriendList">
//           {Users.map((u) => (
//             <Online key={u.id} user={u} />
//           ))}
//         </ul>
//       </>
//     );
//   };

//   const ProfileRightbar = () => {
//     return (
//       <>
//         <h4 className="rightbarTitle">User information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">City:</span>
//             <span className="rightbarInfoValue">New York</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">From:</span>
//             <span className="rightbarInfoValue">Madrid</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">Relationship:</span>
//             <span className="rightbarInfoValue">Single</span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/1.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/2.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/3.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/4.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/5.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="assets/person/6.jpeg"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {profile ? <ProfileRightbar /> : <HomeRightbar />}
//       </div>
//     </div>
//   );
// }


import stylesShare from "./rightbar.module.css";
import stylesRightbar from './rightbar.module.css'
import { Users } from "../../Atoms/Data/data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={stylesShare.birthdayContainer}>
          <img className={stylesShare.birthdayImg} src="assets/gift.png" alt="" />
          <span className={stylesShare.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className={stylesShare.rightbarAd} src="assets/ad.png" alt="" />
        <h4 className={stylesRightbar.rightbarTitle}>Online Friends</h4>
        <ul className={stylesRightbar.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={stylesRightbar.rightbarTitle}>User information</h4>
        <div className={stylesRightbar.rightbarInfo}>
          <div className={stylesRightbar.rightbarInfoItem}>
            <span className={stylesRightbar.rightbarInfoKey}>City:</span>
            <span className={stylesRightbar.rightbarInfoValue}>New York</span>
          </div>
          <div className={stylesRightbar.rightbarInfoItem}>
            <span className={stylesRightbar.rightbarInfoKey}>From:</span>
            <span className={stylesRightbar.rightbarInfoValue}>Madrid</span>
          </div>
          <div className={stylesRightbar.rightbarInfoItem}>
            <span className={stylesRightbar.rightbarInfoKey}>Relationship:</span>
            <span className={stylesRightbar.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={stylesRightbar.rightbarTitle}>User friends</h4>
        <div className={stylesRightbar.rightbarFollowings}>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={stylesRightbar.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={stylesRightbar.rightbarFollowingImg}
            />
            <span className={stylesRightbar.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={stylesRightbar.rightbar}>
      <div className={stylesRightbar.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

