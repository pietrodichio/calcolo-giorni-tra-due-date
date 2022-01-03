import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import TextField from '@material-ui/core/textfield';
import { useState } from 'react';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [startDate, setStartDate] = useState(moment().subtract(1, 'month'));
  const [endDate, setEndDate] = useState(moment());
  return (
    <div className={styles.container}>
      <Head>
        <title>Calcolo giorni tra due date</title>
        <meta name="description" content="Servizio per calcolare i giorni tra due date" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📆</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Calcolo giorni tra due date</h1>
        <p className={styles.description}>Inserisci le date</p>
        <div className="flex flex-col w-full">
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-10"
          >
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                fullWidth
                label="Data iniziale"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Data finale"
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </form>
        </div>
      </main>
    </div>
  );
}
