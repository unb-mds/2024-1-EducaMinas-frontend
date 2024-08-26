import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-primary-red w-full h-full flex flex-col md:flex-row p-4 md:p-0">
      <div className="flex items-center justify-center h-[70%] md:h-full w-full md:w-[50%] md:ml-10">
        <Image src={'/home.png'} alt="home" width={550} height={550} className="w-[80%] md:w-full max-h-full" />
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center mt-6 md:mt-0">
        <div className="flex flex-col w-full items-center justify-center px-4 md:px-0">
          <div className="w-full md:w-[60%]">
            <h1 className="text-primary-white font-extrabold text-[1.5em] md:text-[2em] text-center md:text-left">
              Investigue os dados sobre a Educação do Estado de Minas Gerais
            </h1>
            <p className="text-primary-white text-[0.875rem] md:text-[1.2rem] mt-[20px] md:mt-[30px] text-center md:text-left">
              Visualize de forma intuitiva, em gráficos, informações da educação do estado de Minas Gerais extraídas da
              pesquisa educacional realizada pelo INEP.
            </p>
          </div>
          <div className="w-full md:w-[60%] mt-[20px] md:mt-[60px]">
            <Link href="/search">
              <button className="bg-primary-white w-full text-[1.25rem] md:text-[2rem] text-primary-red font-bold py-4 md:py-6 px-6 md:px-10 rounded-full shadow-lg transition-transform duration-500 transform-gpu hover:scale-105">
                Descubra mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
