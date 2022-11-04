import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
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
