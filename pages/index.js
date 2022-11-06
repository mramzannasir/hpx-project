import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
        <Head>
          <title>HPX Delivery Application | Home</title>
          <meta name="HPX-application" content="Generated by create next app" />
        </Head>
      </div>
      <main>
        {/* Layout */}
        <Layout />
      </main>
    </>
  );
}
