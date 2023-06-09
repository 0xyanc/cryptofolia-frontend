import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ShowPlant from '@/components/ShowPlant/ShowPlant'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mint Plant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShowPlant />
    </>
  )
}
