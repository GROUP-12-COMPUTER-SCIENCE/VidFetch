import styles from "./module.scss";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
    <Navbar/>
    <div className="content">
    <h1> Welcome to VidFetch - YouTube Video Downloader</h1>
    <h2><small>Download YouTube videos effortlessly with VidFetch. Save your favorite videos for offline viewing, learning, or entertainment.
</small></h2>
</div>
    </main>
  );
}
