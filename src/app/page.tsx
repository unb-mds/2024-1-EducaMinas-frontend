import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-primary-red bg-gradient-to-b from-primary-red to-green-500 w-full h-full flex">
      <div className=" flex items-center justify-center h-full w-[50%]">
        <Image src={'/home.png'} alt="home" width={550} height={550} />
      </div>
      <div className="h-full w-[50%]">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="w-[60%]">
            <h1 className="text-primary-white font-extrabold text-[2rem]">
              Investigue os dados sobre a Educação do Estado de Minas Gerais
            </h1>
            <p className="text-primary-white text-[1.2rem] mt-[60px]">
              Visualize de forma intuitiva, em gráficos, informações extraídas diretamente dos diários oficiais dos
              múnicipios mineiros.
            </p>
          </div>
          <div className="w-[60%] mt-[60px]">
            <Link href="/search">
              <button className="bg-primary-white w-full text-[2em] text-primary-red font-bold py-6 px-10 rounded-full shadow-lg transition-transform duration-500 transform-gpu hover:scale-105">
                Descubra mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
