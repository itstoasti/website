import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next Fitness App
        </h1>

        <div className={styles.grid}>
          <Link href="/goals">
            <a className={styles.card}>
              <h3>Track Goals &rarr;</h3>
              <p>Set and monitor your fitness goals.</p>
            </a>
          </Link>

          <Link href="/macros">
            <a className={styles.card}>
              <h3>Track Macros &rarr;</h3>
              <p>Keep track of your daily macro intake.</p>
            </a>
          </Link>

          <Link href="/recipes">
            <a className={styles.card}>
              <h3>Input Recipes &rarr;</h3>
              <p>Add your favorite healthy recipes.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;