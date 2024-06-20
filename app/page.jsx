import styles from "./module.scss";
import Navbar from "./components/Navbar";

export default function Home() {
  const handleSubmit=() =>{
    console.log("Form submitted")
  }
  return (
    <main className={styles.main}>
    <Navbar/>
    <div className="content">
    <h1>VidFetch - YouTube Video Downloader</h1>
    <h2><small>Download YouTube videos effortlessly with VidFetch. Save your favorite videos for offline viewing, learning, or entertainment.
</small></h2>
<div className="frosted">
 <form action="/download" method="post">
    <input type="text" name="url" placeholder="Enter YouTube video URL" required/>
    <button type="submit">Download</button>
    </form>
    </div>
<div className="unique">
  <div className="unlimited">
    <h3>Unlimited Downloads</h3>
    <p>Download as many videos as you want, with no restrictions.</p>
  </div>
  <div className="fast">
    <h3>Fast Downloads</h3>
    <p>Download videos at high speed, without any buffering.</p>
    </div>
    <div className="free">
    <h3>Free to Use</h3>
    <p>Download videos for free, with no hidden charges.</p>
    </div>
    <div className="accessibility">
    <h3>Accessibility</h3>
    <p>Download videos from any device, including mobile phones and tablets.</p>
    </div>
</div>
</div>
    </main>
  );
}
