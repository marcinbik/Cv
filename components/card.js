




export default function Card({ title, text}){
    return(
        <div className=" p-10  rounded-xl m-5   shadow-md" >
           <div className="bg-[#8F9BAC] bg-opacity-20  h-60  rounded-xl p-2 text-opacity-20" >
                <div className="mx-3  text-left text-white text-opacity-70 p-2">
                    {title}
                    
                </div>
                
                <div className="   text-justify text-opacity-70 text-white  p-5">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}