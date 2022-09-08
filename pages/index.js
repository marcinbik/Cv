import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'

export default function Home() {
  return (
   <div className=' bg-[#17181B] h-min-scenn '>
    <Heading/>
      <main >
     
        
        <div className=" grid xl:grid-cols-3 row-span-2 shadows-lg 	]	">
         <div className=" bg-[url('/rudy.jpg')] bg-cover bg-center rounded-lg    min-h-screen  	"  >
          <div className='h-1/2'>

          </div>
          <div className='grid h-1/4 text-white'>
           
            

          
            
          </div>
          <div className=' flex-initial bg-black  bg-opacity-50 rounded-full text-white text-center  p-10  content-end items-center'>
          <h1 className="p-2 text-5xl ">Marcin Bikiewicz</h1>
            <p className='text-justyfy '>web developer</p>

          </div>
         </div>
         
        <div className='text-white'>
         <div className='h-1/8'></div>
          <div>

          <Card title={"Galeria twoich produktów"} text={"spraw aby się zerali szukają informacji o twojej firmie w internecie"}/>
          <Card title={"strona Informacyjnia"} text={"spraw aby się zerali szukają informacji o twojej firmie w internecie"}/>
          <div className=' mx-10 flex'>
            <div className='text-white text-left p-10 w-1/2'>dupa</div>           
             <div className='text-white  p-10'>dupa</div>
             

            </div>
          </div>
        <div>
          
        </div>
        

        </div>
        
          <div>
            <div className='h-1/8'></div>
            <Card title={"Strona Informacyjnia"} text={"spraw aby się zerali spraw aby się zeralispraw aby się zeraliszukają informacji o twojej firmie w internecie"}/>
            <Card title={"Sklep Internetowy"} text={" Sklep zaprojektowany pod ciebie  który przciądnie klietów."}/> 
            <div className='text-white w-1/4 p-10' >dupa</div>

           
          </div>
       
       
        </div >
        
      </main>
      

    </div>
    
  )
}
