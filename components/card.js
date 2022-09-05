




export default function Card({image, title, text}){
    return(
        <div className=" p-10  rounded m-5   shadow-lg" >
            
           <img className="p-2 display: mx-auto my-10 rounded-full  " src={image} height={400} width={400} />
            
           <div className="bg-slate-200  rounded-xl p-2 " >
                <div className="font-bold my-10 text-xl text-center p-2">
                    {title}
                    
                </div>
                
                <div className="pt-5 p-8 my-10 text-justify space-y-3">
                    {text}
            
                </div>
           
        
            </div>
        </div>
    )
}