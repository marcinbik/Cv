import Head from 'next/head'
import Navbar from '../components/navbar'
import Card from '../components/card'
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
        <br/>
        <Card image={"/photo.jpg"} title={"Marcin Bikiewicz"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, mac"}/>
        
      </main>
      <Footer/>

      
    </div>
  )
}
