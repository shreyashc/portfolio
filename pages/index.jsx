import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount((initalCount) => initalCount + 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Shreyas H C</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Portfolio website of shreyas hc / About Shreyas hc"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.info}>
          <div className={styles.progress}>Work in Progeress 🙂</div>
        </div>
        <div className={styles.count}>{count}</div>
        <button className={styles.countBtn} onClick={incr}>
          Click me
        </button>
      </main>
    </div>
  );
}
