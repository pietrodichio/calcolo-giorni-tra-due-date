import Head from 'next/head';
import styles from '../styles/Home.module.css';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';

export default function Home() {
  const schema = yup
    .object({
      startDate: yup
        .string('ippo')
        .required('Deve esserci una data di inizio')
        .matches(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
          'La data deve essere nel formato dd/mm/yyyy'
        ),
      endDate: yup
        .string('pippo')
        .required('Deve esserci una data di fine')
        .matches(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
          'La data deve essere nel formato dd/mm/yyyy'
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, values },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const startDate = moment().subtract(1, 'month').format('DD/MM/YYYY').toString();
  const endDate = moment().format('DD/MM/YYYY').toString();
  const onSubmit = (data, errors) => {
    router.push({
      pathname: '/result',
      query: { startDate: data.startDate, endDate: data.endDate },
    });
  };
  // const onSubmit = (data, e) => console.log(data, e);
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
          <form className="flex flex-col gap-y-10 text-3xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <label>Data iniziale</label>
                <input
                  name="datainiziale"
                  type="text"
                  className="bg-gray-50 border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder={startDate}
                  {...register('startDate')}
                />
                {errors?.endDate?.message && (
                  <p className="text-sm text-red-600">{errors?.endDate?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <label>Data finale</label>
                <input
                  name="datafinale"
                  type="text" //da usare con hookForm
                  className="bg-gray-50 border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder={endDate}
                  {...register('endDate')}
                />
                {errors?.endDate?.message && (
                  <p className="text-sm text-red-600">{errors?.endDate?.message}</p>
                )}
              </div>
            </div>
            <button
              // onClick={handleSubmit(onSubmit)}
              type="submit"
              className="border  sm:text-sm rounded-lg  block w-full pl-2.5 p-2.5 border-gray-600 placeholder-white text-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-black"
            >
              Invia
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
