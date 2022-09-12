import Heading from '../components/Heading'
import Map from '../components/Map'
import Footer from '../components/footer'
import Form from '../components/Form'

export default function Home() {
  return (
    <main className='bg-[#17181B]' >
    <Heading/>
        <div  >
        
        <Map/>
        <div className=' flex-gird xl:w-[30vw] text-white p-20  items-center'>
          <Form/>
        </div>
      <Footer/>
    </div>
      
      </main>
  )
}
