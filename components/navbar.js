import { useState } from "react";

function NavLink({to, children})
{
    return <a href={to} className={`mx-4`}>
        {children}
    </a>}

function MobileNav({open, setOpen}) {
    return(
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-tranform duration-300 else-in-out filter drop-shadow-md`}>
            <div className={`flex items-center justify-center filter drop-shadow-md bg-opacity-50 bg-black h-20`}>
                <a className={`text-2xl font-semibold `} href="/">MB</a>
            </div>
            <div className={`flex flex-col mx-20`}>
            <a className="text-2xl hover:border-solid p-2 text-center hover:border-2 font-medium my-4" href="/Projects" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Moje Usługi</a>
                <a className="text-2xl p-2 text-center  hover:border-2 fonnt-medium my-4" href="/About" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>O Mnie</a>
                <a className="text-2xl p-2 text-center hover:border-2 fonnt-medium my-4" href="/Contact" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Kontakt</a>
                
            </div>
        </div>
      
        
    )

}

export default function Navbar(){
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter z-50 drop-shadow-md text-white font-bold   bg-[#b12c2c] px-5 py-5 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibld " href="/">MB</a>
            </div>
            <div className=" flex relative w-8 h-8 flex-col justyfy-between  items-center md:hidden" onClick={() => {setOpen(!open)}}>
                <span className={`h-1 w-full mt-1 bg-white rounded-lg  transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
                <span className={` h-1 w-full mt-1 bg-white rounded-lg  transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :""}`}/>
                <span className={`h-1 w-full mt-1 bg-white rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
                <span className={`h-1 w-full mt-1 bg-white rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
            </div>

            <div className="hidden md:sticky text-2xl md:flex ">
                
                <NavLink to="/Projects">
                   <p className="hover:text-[#17181B] "> Moje Usługi</p>
                </NavLink>
                <NavLink to="/About">
                <p className="hover:text-[#17181B] "> O Mnie</p>
                </NavLink>
                <NavLink to="/Contact">
                <p className="hover:text-[#17181B] "> Kontakt</p>
                </NavLink>
            </div>
        </nav>
        

    )

}