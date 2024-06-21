import styles from "./contact.scss";
import Navbar from "../components/Navbar";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <h2>
          <small>We would love to hear from you! Fill out the form below to get in touch with us.</small>
        </h2>
        <div className="frosted">
          <form >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
