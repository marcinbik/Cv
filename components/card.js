import Image from "next/image"





export default function Card({ image, title, text}){
    return(
        <div className="grid xl:w-1/2     max-h-screen ">

        <div className="   xl:mb-0 rounded-md   " >
            <div className="object-contain relative   h-[45vh]       ">
            <Image  src={image} className="" layout="fill" />

            </div>

           <div className=" h-[40vh]  " >
                <div className="  text-center text-4xl text-white text-opacity-90 p-2 py-6 xl:pt-[7vh] font-bold">
                    {title}
                    
                </div>
                
                <div className="    text-justyfy xl:mx-5 text-xl text-opacity-90 text-white  p-5">
                    {text}
            
                </div>
           
        
            </div>
        </div>
        </div>
    )
}