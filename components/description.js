
export default function Description(text){
    return(

        <div className=" bg-black text-2xl md:text-3xl bg-opacity-60 shadow-lg  p-8 md:p-5      h-full" >
        <div className="h-1/5 "></div>
           <div className="xl:px-60 ">
            {text.text}

           </div>
            
           
        
        </div>
    )
}