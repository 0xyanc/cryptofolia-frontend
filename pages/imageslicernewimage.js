import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing/Landing'
import Setup from '@/components/Setup/Setup'
import ImageSlicerNewImage from '@/components/ImageSlicer/ImageSlicerNewImage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageSlicerNewImage/>
    </>
  )
}
