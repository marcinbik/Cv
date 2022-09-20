import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return(
        <div className='grid w-[100vw]'>
        <div className=''>
       
                <div className='text-white  mx-2 mb-0 p-1 hover:text-[#b12c2c] text-xl    '> <FontAwesomeIcon icon={faPhone} /><a href='tel:887407337'> telefon: 887407337</a></div>
                <div className='text-white mx-2  p-1 hover:text-[#b12c2c] text-xl px-2 '><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:marcinbikiewicz@gmail.com'> email: marcinbikiewicz@gmail</a> </div>
        
            </div>
            </div>
    )

}