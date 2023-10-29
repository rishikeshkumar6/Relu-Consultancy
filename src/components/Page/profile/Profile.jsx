// import "./profile.module.css";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";

// export default function Profile() {
//   return (
//     <>
//       <Topbar />
//       <div className="profile">
//         <Sidebar />
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileCover">
//               <img
//                 className="profileCoverImg"
//                 src="assets/post/3.jpeg"
//                 alt=""
//               />
//               <img
//                 className="profileUserImg"
//                 src="assets/person/7.jpeg"
//                 alt=""
//               />
//             </div>
//             <div className="profileInfo">
//                 <h4 className="profileInfoName">Safak Kocaoglu</h4>
//                 <span className="profileInfoDesc">Hello my friends!</span>
//             </div>
//           </div>
//           <div className="profileRightBottom">
//             <Feed />
//             <Rightbar profile/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import profileStyles from "./profile.module.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className={profileStyles.profile}>
        <Sidebar />
        <div className={profileStyles.profileRight}>
          <div className={profileStyles.profileRightTop}>
            <div className={profileStyles.profileCover}>
              <img
                className={profileStyles.profileCoverImg}
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className={profileStyles.profileUserImg}
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className={profileStyles.profileInfo}>
                <h4 className={profileStyles.profileInfoName}>Safak Kocaoglu</h4>
                <span className={profileStyles.profileInfoDesc}>Hello my friends!</span>
            </div>
          </div>
          <div className={profileStyles.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

