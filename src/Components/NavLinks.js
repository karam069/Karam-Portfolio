import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";


// NavLinks
const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];


// Map over the navItems and make nav links
const NavLinks = () => {

    return(
        <>
        {navItems.map(item => <a className="text-black dark:text-white" href={item.href}>
        <li className="px-4 py-2 md:py-0 text-[18px] text-black dark:text-white list-none">{item.label}</li>
        </a>)}

        </>
    )
}

export default function Nav({darkMode, setdarkMode}){
    // Is open State for mobile nav
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

   return(
     <>
     <nav className="w1/2 flex justify-end">
      <div className="hidden w-full lg:flex justify-between">
      <NavLinks/>
      </div>
      <button className="lg:hidden text-black dark:text-white" onClick={toggleNavbar}>
        {isOpen ? <X/> : <Menu/>}
      </button>

      
     </nav>

     {isOpen && (
        <div className="flex basis-full flex-col items-center mt-8 text-black dark:text-white">
            <NavLinks/>
        <button className="mt-3" onClick={() => setdarkMode(!darkMode)}>{darkMode ? <Sun/> : <Moon/>}</button>
            
          </div> 
     )}
     </>
   )
}