import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
   <div className=' bg-[#17181B] pb-0 h-full  mb-0 '>
    <Heading/>
      <main >
        <div className="grid p-0  xl:grid-cols-3 pb-0 mb-0 row-span-2 shadows-lg  	]	">
         <div className=" bg-[url('/rudy.jpg')]  bg-cover  mx-0  pb-7 mb-0 bg-center  xl:pb-0 xl:h-full min-h-screen" >
              <div className=' h-1/2'>
              </div>
              <div className=' grid h-1/4 text-white'>
              </div>
              <div className=' mb-0   font-bold text-white text-center xl:pb-0 xl:py-10  content-end items-center'>
              <h1 className="  text-7xl shadow-sm ">Marcin Bikiewicz</h1>
              <p className=' text-2xl shadow-sm text-justyfy '>web developer</p>
          </div>
         </div>
        <div className='text-white'>
          <div>
          <Card title={"Strona Reklamowa"} image={"/strona.jpg"} text={"Zbuduje  witrynę zgodną z stadardami dzisiejszych stron. Dopasuje wygląd do branży oraz z tym co sobie zażyczysz. Będziesz chciał coś zmienić? Nie ma problemu. "}/>
          </div>
        </div>
          <div> 
            <Card title={"Sklep Internetowy"} image={"/sklep.jpg"} text={" Zaprojektuje nowoczesny sklep internetowy. Zadbam o jego atrakcyjny wygląd. moje sklepy są elastyczne, funkcjonalne i przyjazne dzięki czemu łatwo przyciągniesz klietów."}/>
            <Contact/>
          </div>
        </div >
      </main>
      
      
    </div>
    
  )
}
