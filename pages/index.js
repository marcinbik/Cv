import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'
import Baner from '../components/baner'
import BanerBotton from '../components/banerBotton'


export default function Home() {
  return (
    <main >
        <div className=' bg-[#17181B] pb-0  xl:w-fit w-[150vw]  h-fit'>
          <Heading/>
        <div className="grid  xl:flex  mb-0  shadows-lg  	]	">
         <Baner/>
         
          <div className=' xl:inline-flex  flex-grid  h-fit '>
            <Card title={"Strona Reklamowa"} image={"/strona.jpg"} text={"Zbuduje  witrynę zgodną z stadardami dzisiejszych stron. Dopasuje wygląd do branży oraz z tym co sobie zażyczysz. Będziesz chciał coś zmienić? Nie ma problemu. "}/>
            <Card  title={"Sklep Internetowy"} image={"/sklep.jpg"} text={" Zaprojektuje nowoczesny sklep internetowy. Zadbam o jego atrakcyjny wygląd. moje sklepy są elastyczne, funkcjonalne i przyjazne dzięki czemu łatwo przyciągniesz klientów. "}/>
          </div>
               
        
        </div >
        
          <BanerBotton/>
          
          <Footer/>
         </div>
      </main> 
      
      
    
  )
}
