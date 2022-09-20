import Heading from '../components/Heading'
import Map from '../components/Map'
import Footer from '../components/footer'
import Form from '../components/Form'
import ContactButton from '../components/ContactButton'


export default function Home() {
  return (
    <main  >
        <div className='grid h-fit m-0 bg-[#17181B]' >
        <Heading/>
        
        <Map/>
        
        <div className="font-bold bg-[url('/post.jpg')]  bg-center ">
          <div className='bg-black bg-opacity-40'>
        <ContactButton/>

          <h1 className="m-0  text-center pt-[2vh] text-white text-3xl">Napisz do mnie</h1>
          <div className="grid">
               <div className='  xl:pl-[35vw] '>

               <Form/>
               </div>
            <div >
              <div className=" h-[40vh] mb-10"/>
            </div>

          </div >
          <Footer/>
        </div>
    </div>
          </div>
      
      </main>
  )
}
