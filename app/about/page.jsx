import styles from "./about.scss";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className={styles.about}>
      <Navbar />
      <div className="content-about">
        <h1>About Us</h1>
        <div className="frosted">
          <h2>Our Mission</h2>
          <p>
            At VidFetch, our mission is to provide a seamless and efficient way
            for users to download their favorite YouTube videos. We aim to offer
            a user-friendly platform that caters to all your video downloading
            needs.
          </p>
          <h2>Our Story</h2>
          <p>
            VidFetch was founded by a group of passionate individuals who
            recognized the need for an easy and reliable YouTube video
            downloader. Since our inception, we have been committed to improving
            our service and ensuring user satisfaction.
          </p>
          <h2>Meet the Team</h2>
          <p>
            Our team consists of experienced developers, designers, and
            customer support specialists who work tirelessly to bring you the
            best possible experience. We believe in continuous improvement and
            are always looking for ways to enhance our service.
          </p>
        </div>
      </div>
    </main>
  );
}
