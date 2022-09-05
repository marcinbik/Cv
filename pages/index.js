import Heading from '../components/Heading'
import Card from '../components/card'
import Footer from '../components/footer'

export default function Home() {
  return (
   <div>
    <Heading/>
      <main >
     
        
        <div className=" grid xl:grid-cols-2 row-span-2 p-5 		]	">
        <Card  image={"/photo.jpg"} title={"Marcin Bikiewicz"} text={" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, mac"}/>
          <div className=' justify-center   p-10' >
          <img src='/art.jpg' width="100%" className='' />

        
          <p className='text-justify shadow-lg p-5 '>Lorem 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>

       
        </div >
        
      </main>
      <Footer/>

      
    </div>
  )
}
