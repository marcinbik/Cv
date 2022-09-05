import Head from "next/head";
import Navbar from "./navbar";



export default function Heading (){
    return(
        <div>

            <Head>
            <title>Marcin Bikiewicz</title>
            <meta name="description" content="Web Deweloper" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
    
        <Navbar/>
          
        </div>
           
    )
}