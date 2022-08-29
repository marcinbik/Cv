import Head from 'next/head'
import Navbar from '../components/navbar'

import Footer from '../components/footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Marcin Bikiewicz</title>
        <meta name="description" content="Web Deweloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Navbar/>
       
        
      </main>
      <Footer/>

      
    </div>
  )
}
