
export default function Description(text){
    return(

        <div className=" bg-black text-xl md:text-3xl xl:text-4xl sm:text-3xl bg-opacity-60 shadow-lg  xl:h-[30vh]    h-fit" >
           <div className=" grid  p-5 h-fit   ">
            {text.text}

           </div>
            
           
        
            <div className=""></div>
        </div>
    )
}