




export default function Card({image, title, text}){
    return(
        <div className=" p-10 max-w-md rounded m-5   shadow-lg" >
            
           <img className="p-2 md:ml-20 rounded-full " src={image} height={200} width={200} />
            
           <div className="bg-slate-200  rounded-xl p-2 " >
                <div className="font-bold text-xl text-center p-2">
                    {title}
                    
                </div>
                
                <div className="pt-5 p-8  text-justify space-y-3">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}