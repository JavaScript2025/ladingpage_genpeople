import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4 bg-[#DCECF2] text-black">
      <div className="container flex justify-between text-lg mx-8">
        <Link to="/home" className="text-2xl font-bold">
          Gen People
        </Link>
        <div className="flex gap-8">
            
            <Link to="/home" className="hover:underline">
            Home 
            </Link>
            <Link to="/produtos" className="hover:underline">
            Produtos
            </Link>
            <Link to="/sobrenos" className="hover:underline">
            Sobre nós
            </Link>
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
