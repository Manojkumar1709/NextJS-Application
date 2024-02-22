import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h2>Hello, Welcome to NextJS Application</h2>
        <p>This application is developed by using NextJS</p>
        <p id="datetime"></p>
      </div>
    </div>
  );
}
