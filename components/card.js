import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="grid xl:w-1/2 p-0 m-0    h-fit ">

        <div className="   xl:mb-0 rounded-md   " >
            <div className="object-contain relative  xl:h-[42vh] h-80 ">
            <Image  src={image} className="" layout="fill" />

            </div>

           <div className="h-fit  " >
                <div className="  text-center text-4xl text-white text-opacity-90 p-5 m-2 xl:pt-[7vh] font-bold">
                    {title}
                    
                </div>
                
                <div className="    text-justyfy p-4 mx-5 text-xl pb-10 text-opacity-90 text-white ">
                    {text}
            
                </div>
           
        
            </div>
        </div>
        </div>
    )
}