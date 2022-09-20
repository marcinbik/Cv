import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return(
        <div className='grid h-fit '>
        <div className='xl:flex h-fit 2xl:pl-[22vw] font-bold pt-[5vh] xl:pt-[7vh] text-center  p-5   mx-0 shadow-md'>
       
                <div className='text-[white]  mx-4 mb-2 p-1 hover:text-[#b12c2c]  text-2xl xl:text-5xl   '> <FontAwesomeIcon icon={faPhone} /><a href='tel:887407337'> telefon: 887407337</a></div>
                <div className='text-[white] mx-4 mb-2 p-1 hover:text-[#b12c2c]    text-2xl xl:text-5xl pb-0px-2 '><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:marcinbikiewicz@gmail.com'> email: marcinbikiewicz@gmail</a> </div>
        
            </div>
            </div>
    )

}