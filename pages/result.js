import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';

const Result = () => {
  const router = useRouter();
  const { startDate, endDate } = router.query;
  const startDateManaged = moment(startDate);
  const endDateManaged = moment(endDate);
  const diff = endDateManaged.diff(startDateManaged);
  return (
    <div className={styles.container}>
      <Head>
        <title>Calcolo giorni tra due date | Risultato</title>
        <meta name="description" content="Servizio per calcolare i giorni tra due date" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📆</text></svg>"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Risultato</h1>
        {startDate} and {endDate}
      </main>
    </div>
  );
};

export default Result;
