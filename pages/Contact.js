import Heading from '../components/Heading'
import Map from '../components/Map'
import Footer from '../components/footer'
import Form from '../components/Form'
import ContactButton from '../components/ContactButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#17181B]' >
    <Heading/>
        <div  >
        
        <Map/>
        
        <ContactButton/>
          <h1 className='p-5  font-bold text-white text-3xl'>Napisz do mnie</h1>
        <div className=' '>
          <div className=' grid-cols-2 '>
          <Form/>
            <div >
              <Image width={'60vw'} height={'100'} src='/post.jpg'/>
            </div>

          </div >
        </div>
      <Footer/>
    </div>
      
      </main>
  )
}
