import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return(
        <div>
        <div className=' text-white mb-0 m-2 p-1 font-bold text-3xl w-1/3 pt-10'>
            Kontakt:
        </div>
        <div className='flex-grid'>
                <div className='text-white m-2 mb-0 p-1 hover:text-[#b12c2c] text-3xl hover:shadow-lg pt-10 w-fit px-2'> <FontAwesomeIcon icon={faPhone} /><a href='tel:887407337'> telefon: 887407337</a></div>
                <div className='text-white m-2 mb-4 hover:text-[#b12c2c] hover:shadow-lg text-3xl pb-0 py-5 w-fit px-2 '><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:marcinbikiewicz@gmail.com'> email: marcinbikiewicz@gmail</a> </div>

            </div>
            </div>
    )

}