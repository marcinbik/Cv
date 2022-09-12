import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="grid xl:w-1/2   max-h-screen">

        <div className="   m-5 xl:mb-0 rounded-md mx-2  " >
            <div className="object-contain relative   h-[40vh]       ">
            <Image  src={image} className="rounded-t-md" layout="fill" />

            </div>

           <div className="bg-[#8F9BAC]  bg-opacity-25  h-[40vh]  shadow-md   rounded-b-md p-2 text-opacity-20" >
                <div className="mx-3  text-center text-4xl text-white text-opacity-70 p-2 py-6 font-bold">
                    {title}
                    
                </div>
                
                <div className="   text-justify text-lg text-opacity-70 text-white  p-5">
                    {text}
            
                </div>
           
        
            </div>
        </div>
        </div>
    )
}