import Heading from '../components/Heading'
import Map from '../components/Map'
import Footer from '../components/footer'
import Form from '../components/Form'
import ContactButton from '../components/ContactButton'


export default function Home() {
  return (
    <main className='bg-[#17181B]' >
    <Heading/>
        <div  >
        
        <Map/>
        
        <ContactButton/>
        <div className="font-bold bg-[url('/post.jpg')]  bg-center ">
          <div className='bg-black bg-opacity-40'>

          <h1 className="p-5  text-center  text-white text-3xl">Napisz do mnie</h1>
          <div className="grid">
               <div className='pl-10 xl:pl-[35vw] '>

               <Form/>
               </div>
            <div >
              <div className=" h-[40vh] mb-10 mr-10"/>
            </div>

          </div >
        </div>
    </div>
      <Footer/>
          </div>
      
      </main>
  )
}
