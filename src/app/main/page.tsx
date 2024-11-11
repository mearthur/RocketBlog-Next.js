import Image from 'next/image'
import PostOne from '../../../public/post-1.svg'
import PostTwo from '../../../public/post-2.svg'
import PostTree from '../../../public/post-3.svg'
import PostFour from '../../../public/post-4.svg'

export default function Main() {
  return (
    <>
      <div className="flex items-center justify-center w-[80%] m-auto">
        <div className="items-center flex gap-2 flex-col m-10 w-[100%]">
          <div className="grid grid-cols-2 gap-8 py-16">
            <section className="flex flex-col gap-4" id='sobre'>
              <Image alt="Imagem de um Computador" src={PostOne} width={700} />
              <p>Janeiro 04, 2022</p>
              <h2 className="text-[#9E6DC2] text-2xl font-bold">
                Começando no ReactJS em 2022
              </h2>
              <p className="w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </section>
            <section className='flex flex-col gap-12'>
              <section className='flex flex-col gap-6'>
                <p>Janeiro 04, 2022</p>
                <h2 className="text-[#9E6DC2] text-2xl font-bold">
                  Começando no ReactJS em 2022
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                  neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                  volutpat aenean.
                </p>
              </section>
              <section className="border-2 border-solid border-[#F2E7FA] my-6 opacity-10"></section>
              <section className='flex flex-col gap-6'>
                <p>Janeiro 04, 2022</p>
                <h2 className="text-[#9E6DC2] text-2xl font-bold">
                  Começando no ReactJS em 2022
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                  neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                  volutpat aenean.
                </p>
              </section>
            </section>
          </div>
          <div className="flex flex-row gap-8 py-16" id='categorias'>
            <section className="flex flex-col gap-4">
              <Image alt="Imagem de um Computador" src={PostTwo} width={500}/>
              <p>Janeiro 04, 2022</p>
              <h2 className="text-[#9E6DC2] text-2xl font-bold">
              10 dicas para conseguir a vaga desejada
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <Image alt="Imagem de um Computador" src={PostTree} width={500} />
              <p>Janeiro 04, 2022</p>
              <h2 className="text-[#9E6DC2] text-2xl font-bold">
              Deixe seu código mais semântico com essas dicas
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <Image alt="Imagem de um Computador" src={PostFour} width={500} />
              <p>Janeiro 04, 2022</p>
              <h2 className="text-[#9E6DC2] text-2xl font-bold">
              Use essas dicas nas suas aplicações mobile
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
