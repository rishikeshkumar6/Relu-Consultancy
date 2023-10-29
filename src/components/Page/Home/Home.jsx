import Topbar from "../../Molecules/topbar/Topbar";
import Sidebar from "../../Molecules/sidebar/Sidebar";
import Feed from "../../Molecules/feed/Feed";
import Rightbar from "../../Molecules/rightbar/Rightbar";
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className={styles.homepage}>
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

