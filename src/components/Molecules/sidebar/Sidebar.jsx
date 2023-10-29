// import styles from  "./sidebar.module.css";
// import {
//   RssFeed,
//   Chat,
//   PlayCircleFilledOutlined,
//   Group,
//   Bookmark,
//   HelpOutline,
//   WorkOutline,
//   Event,
//   School,
// } from "@material-ui/icons";
// import { Users } from "../../Atoms/Data/data";
// import CloseFriend from "../closeFriend/CloseFriend";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarWrapper">
//         <ul className="sidebarList">
//           <li className="sidebarListItem">
//             <RssFeed className="sidebarIcon" />
//             <span className="sidebarListItemText">Feed</span>
//           </li>
//           <li className="sidebarListItem">
//             <Chat className="sidebarIcon" />
//             <span className="sidebarListItemText">Chats</span>
//           </li>
//           <li className="sidebarListItem">
//             <PlayCircleFilledOutlined className="sidebarIcon" />
//             <span className="sidebarListItemText">Videos</span>
//           </li>
//           <li className="sidebarListItem">
//             <Group className="sidebarIcon" />
//             <span className="sidebarListItemText">Groups</span>
//           </li>
//           <li className="sidebarListItem">
//             <Bookmark className="sidebarIcon" />
//             <span className="sidebarListItemText">Bookmarks</span>
//           </li>
//           <li className="sidebarListItem">
//             <HelpOutline className="sidebarIcon" />
//             <span className="sidebarListItemText">Questions</span>
//           </li>
//           <li className="sidebarListItem">
//             <WorkOutline className="sidebarIcon" />
//             <span className="sidebarListItemText">Jobs</span>
//           </li>
//           <li className="sidebarListItem">
//             <Event className="sidebarIcon" />
//             <span className="sidebarListItemText">Events</span>
//           </li>
//           <li className="sidebarListItem">
//             <School className="sidebarIcon" />
//             <span className="sidebarListItemText">Courses</span>
//           </li>
//         </ul>
//         <button className="sidebarButton">Show More</button>
//         <hr className="sidebarHr" />
//         <ul className="sidebarFriendList">
//           {Users.map((u) => (
//             <CloseFriend key={u.id} user={u} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


import sidebarStyles from "./sidebar.module.css"; // Changed the import name to avoid conflict
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import { Users } from "../../Atoms/Data/data";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarWrapper}>
        <ul className={sidebarStyles.sidebarList}>
          <li className={sidebarStyles.sidebarListItem}>
            <RssFeed className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Feed</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <Chat className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Chats</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <PlayCircleFilledOutlined className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Videos</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <Group className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Groups</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <Bookmark className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <HelpOutline className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Questions</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <WorkOutline className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <Event className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Events</span>
          </li>
          <li className={sidebarStyles.sidebarListItem}>
            <School className={sidebarStyles.sidebarIcon} />
            <span className={sidebarStyles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={sidebarStyles.sidebarButton}>Show More</button>
        <hr className={sidebarStyles.sidebarHr} />
        <ul className={sidebarStyles.sidebarFriendList}>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

