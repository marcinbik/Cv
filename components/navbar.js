import { useState } from "react";

function NavLink({to, children})
{
    return <a href={to} className={`mx-4`}>
        {children}
    </a>}

function MobileNav({open, setOpen}) {
    return(
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-tranform duration-300 else-in-out filter drop-shadow-md`}>
            <div className={`flex items-center justify-center filter drop-shadow-md bg-white h-20`}>
                <a className={`text-xl font-semibold href="/"`}>LOGO</a>
            </div>
            <div className={`flex flex-col ml-4`}>
            <a className="text-xl fonnt-medium my-4" href="/Projects" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Nasze Projekty</a>
                <a className="text-xl fonnt-medium my-4" href="/About" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>O nas</a>
                <a className="text-xl fonnt-medium my-4" href="/Contact" onClick={()=> setTimeout(()=> {setOpen(!open)},100)}>Kontakt</a>
                
            </div>
        </div>
      
        
    )

}

export default function Navbar(){
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter z-50 drop-shadow-md bg-[#F0A500] px-5 py-5 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibld" href="/">LOGO</a>
            </div>
            <div className=" flex relative w-8 h-8 flex-col justyfy-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
                <span className={`h-1 w-full mt-1 bg-blue-700 rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
                <span className={` h-1 w-full mt-1 bg-blue-700 rounded-lg transform transition duraton-300 ease-in-out ${open ? "w-0" :"w-full" }`}/>
                <span className={`h-1 w-full mt-1 bg-blue-700 rounded-lg transform transition duraton-300 ease-in-out ${open ? "rotate-45 -translate-y-3.5" :"" }`}/>
            </div>

            <div className="hidden md:flex">
                
                <NavLink to="/Projects">
                    Nasze Projekty
                </NavLink>
                <NavLink to="/About">
                    O nas
                </NavLink>
                <NavLink to="/Contact">
                    Kontakt
                </NavLink>
            </div>
        </nav>
        

    )

}