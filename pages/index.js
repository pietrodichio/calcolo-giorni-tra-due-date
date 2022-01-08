import Head from 'next/head';
import styles from '../styles/Home.module.css';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [startDate, setStartDate] = useState(
    moment().subtract(1, 'month').format('DD/MM/YYYY').toString()
  );
  const [endDate, setEndDate] = useState(moment().format('DD/MM/YYYY').toString());
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
            className="flex flex-col gap-y-10 text-3xl"
          >
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <label>Data iniziale</label>
                <input
                  name="datepicker"
                  datepicker
                  type="text"
                  className="bg-gray-50 border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder={startDate}
                  {...register('startDate', { required: true, maxLength: 10, minLength: 10 })}
                />
              </div>
              <div className="flex flex-col gap-5">
                <label>Data finale</label>
                <input
                  name="datepicker"
                  datepicker
                  type="text"
                  className="bg-gray-50 border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder={endDate}
                  {...register('endDate')}
                />
              </div>
            </div>
            <input
              type="submit"
              className="border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-white text-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-black"
            />
          </form>
        </div>
      </main>
    </div>
  );
}
