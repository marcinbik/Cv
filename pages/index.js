import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'



export default function Home() {
  return (
   <div className=' bg-[#17181B] h-min-scenn '>
    <Heading/>
      <main >
     
        
        <div className=" p-1 grid xl:grid-cols-3 row-span-2 shadows-lg 	]	">
         <div className=" bg-[url('/rudy.jpg')] bg-cover bg-center rounded-lg    min-h-screen  	"  >
          <div className=' h-1/2'>

          </div>
          <div className=' grid h-1/4 text-white'>
           
            

          
            
          </div>
          <div className=' flex-initial font-bold text-white text-center  p-10  content-end items-center'>
          <h1 className="p-2 text-7xl shadow-sm ">Marcin Bikiewicz</h1>
            <p className='p-2 text-2xl shadow-sm text-justyfy '>web developer</p>

          </div>
         </div>
         
        <div className='text-white'>
         <div className='h-10 py-5'></div>
          <div>

          <Card title={"Galeria twoich produktów"} text={"spraw aby się zerali szukają informacji o twojej firmie w internecie"}/>
          <Card title={"strona Informacyjnia"} text={"spraw aby się zerali szukają informacji o twojej firmie w internecie"}/>
          <div className=' mx-10 flex'>
            </div>
          </div>
        <div>    
        </div>
        </div>
        
          <div>
            <div className='h-10 p-5'></div>
            <Card title={"Strona Informacyjnia"} text={"spraw aby się zerali spraw aby się zeralispraw aby się zeraliszukają informacji o twojej firmie w internecie"}/>
            <Card title={"Sklep Internetowy"} text={" Sklep zaprojektowany pod ciebie  który przciądnie klietów."}/>
            <div className='h-1/6'></div> 
            <div className='h-20 text-white m-2 p-1 font-bold text-2xl w-1/3 py-10' >
              Kontakt: 
            </div>
            <div className='flex'>
            <div className='text-white m-2 p-1 text-2xl w-1/3 py-10' > <FontAwesomeIcon icon={faPhone}/>  telefon: <a href='tel:887407337'> 887407337</a></div>
            <div className='text-white m-2 text-2xl py-10'><FontAwesomeIcon icon={faEnvelope} /> email: <a href='email:marcinbikiewicz@gmail.com'>marcinbikiewicz@gmail</a> </div>

            </div>
           
          </div>
       
       
        </div >
        
      </main>
      

    </div>
    
  )
}
