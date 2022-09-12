import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="grid xl:w-1/2 mt-2 xl:pt-4 mb-1 max-h-screen">

        <div className="  border-2 border-[#17181B]  rounded-md mx-1  hover:border-[#9C3848]" >
            <div className="object-contain relative h-[40vh]   p-4    ">
            <Image  src={image} className="rounded-t-md" layout="fill" />

            </div>

           <div className="bg-[#8F9BAC]  bg-opacity-25  h-[40vh]  shadow-md   rounded-b-md p-2 text-opacity-20" >
                <div className="mx-3  text-left text-2xl text-white text-opacity-70 p-2 py-6 font-bold">
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