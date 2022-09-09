




export default function Card({ title, text}){
    return(
        <div className=" p-1 m-10 hover:border-4  hover:border-[#9C3848] shadow-md" >
           <div className="bg-[#8F9BAC]  bg-opacity-25  h-80  rounded-md p-2 text-opacity-20" >
                <div className="mx-3  text-left text-xl text-white text-opacity-70 p-2 font-bold">
                    {title}
                    
                </div>
                
                <div className="   text-justify text-lg text-opacity-70 text-white  p-5">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}