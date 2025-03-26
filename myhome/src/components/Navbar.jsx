import { useState } from "react";
import { Menu } from "lucide-react"; // Import an icon for the menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-darkGreen px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center">
        <img src="/brand-logo.svg" alt="Logo" className="h-8 w-auto" />
        
      </div>

     
      <ul className="hidden lg:flex space-x-8 text-white ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Pages</a></li>
      </ul>

      <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition hidden lg:block">
        Get for Free
      </button>

      
      <div className="lg:hidden flex items-center space-x-4">
        <button className="border border-white text-white px-6 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black">
          Get for Free
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          <Menu />
        </button>
      </div>

      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-darkGreen text-white text-center py-4 space-y-4 lg:hidden">
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Pages</a></li>
        </ul>
      )}
    </nav>
  );
}




