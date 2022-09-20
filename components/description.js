
export default function Description(text){
    return(

        <div className=" bg-black text-xl  sm:text-3xl bg-opacity-60 shadow-lg    xl:py-[20vh]   h-full" >
        
           <div className="xl:px-60 pt-10   px-5 text-justify ">
            {text.text}

           </div>
            
           
        
        </div>
    )
}