import Image from "next/image";
import styles from "./module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    </main>
  );
}
