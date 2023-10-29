// import styles from './closeFriend.module.css'

// export default function CloseFriend({user}) {
//   return (
//     <li className="sidebarFriend">
//       <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
//       <span className="sidebarFriendName">{user.username}</span>
//     </li>
//   );
// }


import closeFriendStyles from './closeFriend.module.css';

export default function CloseFriend({ user }) {
  return (
    <li className={closeFriendStyles.sidebarFriend}>
      <img className={closeFriendStyles.sidebarFriendImg} src={user.profilePicture} alt="" />
      <span className={closeFriendStyles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}

