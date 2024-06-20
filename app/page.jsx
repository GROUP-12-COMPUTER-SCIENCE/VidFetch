import Image from "next/image";
import styles from "./module.scss";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
    <Navbar/>

    <h1> Welcome to VidFetch - YouTube Video Downloader</h1>
    
   

Download YouTube videos effortlessly with VidFetch. Save your favorite videos for offline viewing, learning, or entertainment.
    </main>
  );
}
