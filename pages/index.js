import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'



export default function Home() {
  return (
   <div className='  bg-[#17181B] mb-0'>
    <Heading/>
      <main >
     
        
        <div className=" p-1 grid xl:grid-cols-3 row-span-1 shadows-lg  	]	">
         <div className=" bg-[url('/rudy.jpg')] bg-cover  bg-center rounded-lg    	"  >
          <div className=' h-1/2'>

          </div>
          <div className=' grid h-1/4 text-white'>
           
            

          
            
          </div>
          <div className=' flex-initial font-bold text-white text-center  xl:py-10  content-end items-center'>
          <h1 className=" text-7xl shadow-sm ">Marcin Bikiewicz</h1>
            <p className=' text-2xl shadow-sm text-justyfy '>web developer</p>

          </div>
         </div>
         
        <div className='text-white'>
     
          <div>

          <Card title={"Strona Reklamowa"} image={"/strona.jpg"} text={"Zbuduje  witrynę zgodną z stadardami dzisiejszych stron. Dopasujemy wygląd do branży i zapytamy o Twoje wymagania. Będziesz chciał coś zmienić? Nie ma sprawy. "}/>
         
         
          </div>
        <div>    
        </div>
        </div>
        
          <div>
           
            <Card title={"Sklep Internetowy"} image={"/sklep.jpg"} text={" Zaprojektuje owoczesny sklep internetowy. Zadbamy o jego atrakcyjny wygląd. Nasze sklepy są elastyczne, funkcjonalne i przyjazne użytkownikom! pod ciebie  który przciądnie klietów."}/>
            
            
            <div className='h-10  text-white m-3 p-1 font-bold text-3xl w-1/3 pt-20' >
              Kontakt: 
            </div>
            <div className='flex'>
            <div className='text-white m-2 p-1 text-2xl w-1/3 py-20 ' > <FontAwesomeIcon icon={faPhone}/>  telefon: <a href='tel:887407337'> 887407337</a></div>
            <div className='text-white m-2 text-2xl py-20 '><FontAwesomeIcon icon={faEnvelope} /> email: <a href='email:marcinbikiewicz@gmail.com'>marcinbikiewicz@gmail</a> </div>
            
            </div>
          </div>
       
       
        </div >
            
      </main>
      

    </div>
    
  )
}
