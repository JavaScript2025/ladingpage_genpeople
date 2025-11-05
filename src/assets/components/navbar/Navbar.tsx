import { Link } from "react-router-dom";
import logo from"../../utils/imgs/untitled_design.svg";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 bg-[#FFFAFA]/70 font-roboto text-black border-b-2 border-gray-100 backdrop-blur-md">
      <div className="container flex justify-between text-lg mx-8 ">
        <Link to="/home" className="text-2xl">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>
        <div className="flex gap-8">
          <Link to="/home" className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#712A6B] via-[#F98737] to-[#2F4A94]">
            Home
          </Link>
          {/* <Link to="/produtos" className="hover:underline">
            Produtos
          </Link> */}
          <Link to="/sobrenos" className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#712A6B] via-[#F98737] to-[#2F4A94]">
            Sobre nós
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// bg-background/80 backdrop-blur-md border-b border-border
