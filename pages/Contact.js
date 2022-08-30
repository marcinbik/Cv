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
        <div className=' my-20 p-10 w-22  flex col  items-center'>

        <form action="/send-data-here" method="post">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="first">First name:</label>
          <input type="text" id="first" name="first" className='class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"' />
          <label className="block text-gray-700 text-sm font-bold mb-2" for="last">Last name:</label>
          <input type="text" className='class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"' id="last" name="last" />
          <label className="block text-gray-700 text-sm font-bold mb-2" for="info">Treść</label>
          <input type="text"  id="info" className='class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"' name="last" />
          <button className=' focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'  type="submit">Submit</button>
        </form>
        </div>
       
        <Map  />
        
      </main>
     
      <Footer/>

      
    </div>
  )
}
