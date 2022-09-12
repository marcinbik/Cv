import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'
import Baner from '../components/baner'
import Description from '../components/description'

export default function Home() {
  return (
    <main >
        <div className=' bg-[#17181B] pb-0   mb-0 h-fit'>
          <Heading/>
        <div className="  xl:flex  p-0     pb-0 mb-0  shadows-lg  	]	">
         <Baner/>
         
          <div className=' xl:inline-flex  flex-grid  h-fit '>
            <Card title={"Strona Reklamowa"} image={"/strona.jpg"} text={"Zbuduje  witrynę zgodną z stadardami dzisiejszych stron. Dopasuje wygląd do branży oraz z tym co sobie zażyczysz. Będziesz chciał coś zmienić? Nie ma problemu. "}/>
            <Card  title={"Sklep Internetowy"} image={"/sklep.jpg"} text={" Zaprojektuje nowoczesny sklep internetowy. Zadbam o jego atrakcyjny wygląd. moje sklepy są elastyczne, funkcjonalne i przyjazne dzięki czemu łatwo przyciągniesz klientów. "}/>
          </div>
               
        
        </div >
        <div className='grid text-white   text-justyfy'>
          <div className=' bg-[url("/ligth.jpg")]  bg-center h-[85vh]  sm:h-[60vh] xl:h-[40vh]'>

          <Description text={'Wiem, że jedynie interaktywne rozwiązania prowadzą do sukcesu w biznesie.\n\r Dbam o zadowolenie moich klientów tworząc szerokie spectrum możliwości i technologi.\n\r Projektowanie stron internetowych to dla mnie nie tylko praca, ale także misja, której celem jest budowanie twojego  wizerunku w Internecie.\n\r Stworze dla ciebie skuteczną i profesjonalną witrynę.\n\r Może to być zarówno projekt niewielkiej strony internetowej, jak i mocno rozbudowany serwis.'}/>
          </div>
        
        </div>
           
         <Footer/>
        
         </div>
      </main> 
      
      
    
  )
}
