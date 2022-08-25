




export default function Card({image, title, text}){
    return(
        <div className="fex-col p-10 max-w-sm rounded m-5 flex flex-wrap  shadow-lg" >
            
           <img className="ml-14 p-1 items-center rounded-full " src={image} height={200} width={200} />
            
           <div className="bg-slate-200  rounded-xl p-2 " >
                <div className="font-bold text-xl text-center p-2">
                    {title}
                    
                </div>
                
                <div className="pt-6 p-8  text-center space-y-4">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}