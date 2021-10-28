import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed';
export default function Home() {
  return (
    <div className=" bg-grey-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico" />
      </Head>

          <Header />

          <Feed />

        
    </div>
  )
}
