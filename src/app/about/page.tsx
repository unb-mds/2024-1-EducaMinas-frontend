import Topics from '@/components/Topics';
import Image from 'next/image';
export default function About() {
  return (
    <main>
      <div>
        <h1 className="pt-3 justify-center">
          <Topics title="Sobre o EducaMinas" text="conheça mais sobre nossa iniciativa" />
        </h1>
      </div>

      <div className="w-full md:w-[80%] mx-auto flex flex-col gap-2 my-3 primary-gray border-t-2 items-center mb-10">
        <div className="text-left px-5 w-[80%] lg:w-[70%]">
          <h1 className="text-primary-black font-[700] text-[1.3em] pt-5 sm:text-[1.4em]">Motivação</h1>
          <h2 className="pt-4 text-[0.9em] font-[600] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h2>
        </div>

        <div className="text-left px-5 w-[80%] lg:w-[70%]">
          <h1 className="text-primary-black font-[700] text-[1.3em] pt-9 sm:text-[1.4em]">Objetivos</h1>
          <h2 className="pt-4 text-[0.9em] font-[600] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h2>
        </div>

        <div className="text-left px-5 w-[80%] lg:w-[70%]">
          <h1 className="text-primary-black font-[700] text-[1.3em] pt-9 sm:text-[1.4em]">Saiba Mais</h1>
          <h2 className="pt-4 text-[0.9em] font-[600] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h2>
        </div>
      </div>

      <div className="w-full bg-primary-red p-8 justify-center">
        <div className="text-primary-white font-extrabold text-center mb-4">Nosso time</div>
        <div className="flex justify-center gap-10 items-center flex-wrap text-center bg-primary-red rounded-full w-full">
          <div>
            <a className="flex flex-col items-center" href="https://github.com/rafgpereira">
              <Image
                alt="Rafael"
                src="https://avatars.githubusercontent.com/u/81361524?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">Rafael Pereira</h5>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center" href="https://github.com/johan-rocha">
              <Image
                alt="Johan"
                src="https://avatars.githubusercontent.com/u/104279524?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">Johan Rocha</h5>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center" href="https://github.com/JoaoPedrooSS">
              <Image
                alt="João Pedro"
                src="https://avatars.githubusercontent.com/u/130873951?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">João Pedro</h5>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center" href="https://github.com/jlucasiqueira">
              <Image
                alt="João Lucas"
                src="https://avatars.githubusercontent.com/u/143570377?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">João Lucas</h5>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center" href="https://github.com/dudupaz">
              <Image
                alt="Carlos Eduardo"
                src="https://avatars.githubusercontent.com/u/122990784?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">Carlos Eduardo</h5>
            </a>
          </div>
          <div>
            <a className="flex flex-col items-center" href="https://github.com/DanielFsR">
              <Image
                alt="Daniel"
                src="https://avatars.githubusercontent.com/u/118537519?v=4"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h5 className="text-primary-white">Daniel Ferreira</h5>
            </a>
          </div>
        </div>
        <div className="flex text-center space-x-2 pt-4 justify-center">
          <div className="text-primary-white pt-5 text-center">
            <a href="https://github.com/unb-mds/2024-1-EducaMinas-frontend" target="_blank" rel="noopener noreferrer">
              repositório(frontend)
            </a>
          </div>

          <div className="text-primary-white pt-5 text-center">
            <a href="https://github.com/unb-mds/2024-1-EducaMinas-backend" target="_blank" rel="noopener noreferrer">
              repositório(backend)
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
