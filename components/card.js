import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="grid xl:w-1/2 p-0 m-0    h-fit ">

        <div className="   xl:mb-0 rounded-md   " >
            <div className="object-contain relative   h-[45vh]       ">
            <Image  src={image} className="" layout="fill" />

            </div>

           <div className="h-fit  " >
                <div className="  text-center text-4xl text-white text-opacity-90 p-2  xl:pt-[7vh] font-bold">
                    {title}
                    
                </div>
                
                <div className="    text-justyfy p-4 xl:mx-5 text-2xl text-opacity-90 text-white ">
                    {text}
            
                </div>
           
        
            </div>
        </div>
        </div>
    )
}