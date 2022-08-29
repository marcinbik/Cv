import Head from 'next/head'
import Navbar from '../components/navbar'
import Map from '../components/Map'
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
        <div className=' my-20 p-10 w-8 h-8 flex col items-center'>

        <form action="/send-data-here" method="post">
          <label for="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label for="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <label for="info">Treść</label>
          <input type="text" id="info" name="last" />
          <button type="submit">Submit</button>
        </form>
        </div>
       <Map/>
        
      </main>
      <Footer/>

      
    </div>
  )
}
