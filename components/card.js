import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="  p-1  border-2 border-[#17181B]	 hover:border-[#9C3848] shadow-md " >
            <div className="object-contain relative m-1 h-[28rem] ">
            <Image  src={image} className="rounded-md" layout="fill" />

            </div>

           <div className="bg-[#8F9BAC]  bg-opacity-25  h-[18rem] m-1  rounded-md p-2 text-opacity-20" >
                <div className="mx-3  text-left text-2xl text-white text-opacity-70 p-2 font-bold">
                    {title}
                    
                </div>
                
                <div className="   text-justify text-lg text-opacity-70 text-white  p-5">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}