
export default function Description(text){
    return(

        <div className=" bg-black text-xl md:text-3xl xl:text-4xl sm:text-3xl bg-opacity-60 shadow-lg      h-full" >
        
           <div className="xl:px-10 pt-20   px-5 text-justify ">
            {text.text}

           </div>
            
           
        
        </div>
    )
}