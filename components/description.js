import ScrollToBottom from 'react-scroll-to-bottom'

export default function description(text){
    return(
        <div className="md:flex bg-slate-200  rounded-xl p-8 md:p-5 " >
        
            <ScrollToBottom className="pt-6 md:p-8 text-center md:text-left space-y-4">
            {text.text}
            </ScrollToBottom>
           
        
        </div>
    )
}