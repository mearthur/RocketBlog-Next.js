import Link from "next/link";
import Logo from "../../../public/logo.svg" 
import Image from "next/image";
import { PiMagnifyingGlassBold } from "react-icons/pi";

// bg-gradient-to-r from-[#290742]
export default function Nav() {
  return (
    <div className="flex items-center justify-center w-[80%] m-auto" id="home">
    <div className="items-center justify-between flex m-10 w-[100%] flex-wrap">
      <Image src={Logo} alt="Logo escrito the blog"/>
      <section className=" items-center justify-center">
        <ul className="flex flex-row gap-8">
          <li><Link href="#home" className="text-lg text-gray-400 text-center hover:text-white hover:font-bold hover:-mx-[1px] hover:border-b-4 hover:border-[#4FFF4B] hover:pb-1 hover:rounded-md">Home</Link></li>
          <li><Link href="#sobre" className="text-lg text-gray-400 text-center hover:text-white hover:font-bold hover:-mx-[1.5px] hover:border-b-4 hover:border-[#4FFF4B] hover:pb-1 hover:rounded-md">Sobre</Link></li>
          <li><Link href="#categorias" className="text-lg text-gray-400 text-center hover:text-white hover:font-bold hover:-mx-[3px] hover:border-b-4 hover:border-[#4FFF4B] hover:pb-1 hover:rounded-md">Categorias</Link></li>
        <li><Link href="#" className="text-lg text-gray-400 text-center hover:text-white hover:font-bold hover:-mx-[2.5px] hover:border-b-4 hover:border-[#4FFF4B] hover:pb-1 hover:rounded-md">Contato</Link></li>
        </ul>
      </section>
      <form className="justify-center flex items-center ">
        <input type="text" className="py-2.5 px-6 outline-none text-black rounded-s-md" placeholder="Buscar"/>
        <button className=" bg-sky-600 py-2 px-6 rounded-e" ><PiMagnifyingGlassBold size={28}/></button>
      </form>
    </div>
    </div>
  );
}