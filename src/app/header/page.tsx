import Image from "next/image";
import BannerPrincipal from '../../../public/featured-image.svg'
import { PiArrowRightBold } from "react-icons/pi";

export default function Header() {
  return (
  <>
    <div className="flex items-center justify-center w-[80%] m-auto">
    <div className="items-center flex py-16 m-10 flex-row justify-between gap-2 w-[10]">
      <section className="w-[50%] flex flex-col gap-1">
        <h1 className="text-5xl text-secundary-200 font-bold py-3 tracking-wide">Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
        <p className="text-lg font-regular w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </p>
        <a href="#" className="py-7 font-bold text-lg flex flex-row items-center gap-2 text-[#9E6DC2] w-[30%]">Veja Mais <PiArrowRightBold size={22} color="#4FFF4B"/></a>
      </section>
      <section className="flex items-center justify-center">
        <Image alt="" src={BannerPrincipal}/>
      </section>
    </div>
    </div>
    <section className="border-2 border-solid border-[#4FFF4B] my-6"></section>
    </>
  );
}