import styles from "./module.scss";
import Navbar from "./components/Navbar";
import Unlimited from "./components/images/ph--seal-check-fill.svg";
import Fast from "./components/images/pepicons-pop--fast-forward-circle-filled.svg";
import Free from "./components/images/streamline--payment-10-solid.svg";
import Accessibility from "./components/images/octicon--accessibility-inset-24.svg";
import Image from "next/image";
import Logo from "./components/images/line-md--cloud-download-loop.svg";

export default function Home() {
  const handleSubmit=() =>{
    console.log("Form submitted")
  }
  return (
    <main className={styles.main}>
    <Navbar/>
    <div className="content">
    <div className="logo">
      <Image
      src={Logo}
      alt="VidFetch Logo"
      width={60}
      quality={100}
      />
      <h1>VidFetch</h1>
    </div>
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
  <div className="con1">
    <Image
    src={Unlimited}
    alt="Unlimited Downloads"
    width={60}
    quality={100}
    />
  </div>
    <h3>Unlimited Downloads</h3>
    <p>Download as many videos as you want, with no restrictions.</p>
  </div>
  <div className="fast">
  <Image
    src={Fast}
    alt="Unlimited Downloads"
    width={60}
    quality={100}
    />
    <h3>Fast Downloads</h3>
    <p>Download videos at high speed, without any buffering.</p>
    </div>
    <div className="free">
    <Image
    src={Free}
    alt="Unlimited Downloads"
    width={60}
    quality={100}
    />
    <h3>Free to Use</h3>
    <p>Download videos for free, with no hidden charges.</p>
    </div>
    <div className="accessibility">
    <Image
    src={Accessibility}
    alt="Unlimited Downloads"
    width={60}
    quality={100}
    />
    <h3>Accessibility</h3>
    <p>Download videos from any device, including mobile phones and tablets.</p>
    </div>
</div>
</div>
    </main>
  );
}
