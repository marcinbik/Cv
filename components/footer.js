import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'



export default function footer() {
    return (


<footer className="text-center p-10 shadow-lg bg-[#0F4C75] my-10 ">
<p> &copy; Marcin Bikiewicz</p>
<FontAwesomeIcon icon={faEnvelope} />
  <a href="mailto:marcinbikiewicz@gmail.com"> marcinbikiewicz@gmail.com</a>
</footer>

)
}