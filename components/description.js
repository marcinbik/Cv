
export default function Description(text){
    return(

        <div className=" bg-black text-xl text-justify md:text-3xl xl:text-3xl sm:text-3xl bg-opacity-60 shadow-lg  xl:h-[30vh]  w-full  h-fit" >
           <div className=" flex p-10  h-fit   ">
            {text.text}

           </div>
            
           
        
            <div className=""></div>
        </div>
    )
}