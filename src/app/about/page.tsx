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
            Minas Gerais é o estado com o maior número de municípios no Brasil e desempenha um papel crucial na economia
            nacional. Apesar de sua importância, a obtenção e a visualização de dados educacionais relevantes têm se
            mostrado desafiadoras, dificultando a compreensão de aspectos cruciais da população mineira. Este projeto
            visa centralizar em uma única plataforma os principais índices educacionais de Minas Gerais e seus
            municípios. Através de gráficos e um ranking, buscamos proporcionar análises mais profundas, com foco em
            transparência, confiabilidade e facilidade de acesso. Lançado em 2024, o projeto tem como objetivo
            recontextualizar os dados do Censo Escolar do INEP, oferecendo novas perspectivas sobre a educação em Minas
            Gerais.
          </h2>
        </div>

        <div className="text-left px-5 w-[80%] lg:w-[70%]">
          <h1 className="text-primary-black font-[700] text-[1.3em] pt-9 sm:text-[1.4em]">Objetivos</h1>
          <h2 className="pt-4 text-[0.9em] font-[600] text-justify">
            O EducaMinas tem como principais objetivos simplificar a visualização de dados complexos, oferecendo
            gráficos claros e intuitivos que tornam a interpretação dessas informações mais acessível e compreensível.
            Além disso, busca recontextualizar os dados através de um ranking e comparações entre indicadores,
            municípios, anos e etapas de ensino, proporcionando uma análise mais dinâmica e inovadora. Outro foco do
            projeto é aprofundar a interpretação dos dados, especialmente na análise racial da educação em Minas Gerais,
            permitindo uma compreensão mais detalhada e crítica das informações.
          </h2>
        </div>

        <div className="text-left px-5 w-[80%] lg:w-[70%]">
          <h1 className="text-primary-black font-[700] text-[1.3em] pt-9 sm:text-[1.4em]">Saiba Mais</h1>
          <h2 className="pt-4 text-[0.9em] font-[600] text-justify">
            O <a className="font-bold text-primary-red">EducaMinas</a> é um projeto de software livre, será um prazer
            tê-lo contribuindo conosco! <br /> Para guias de contribuição, tecnologias, arquitetura, especificações,
            diagramas e demais informações, acesse nossos repositórios (
            <a
              className="text-primary-red hover:text-primary-blue cursor-pointer"
              href="https://github.com/unb-mds/2024-1-EducaMinas-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              FrontEnd
            </a>
            <a
              className="text-primary-red hover:text-primary-blue cursor-pointer"
              href="https://github.com/unb-mds/2024-1-EducaMinas-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              , BackEnd
            </a>
            ) e{' '}
            <a
              className="text-primary-red hover:text-primary-blue cursor-pointer"
              href="https://unb-mds.github.io/2024-1-EducaMinas-frontend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentação
            </a>
            .
          </h2>
        </div>
      </div>

      <div className="w-full bg-primary-red p-8 justify-center">
        <div className="text-primary-white font-extrabold text-center mb-4 text-[16px]">Nosso time</div>
        <div className="flex justify-center gap-10 items-center flex-wrap text-center bg-primary-red rounded-full w-full mb-4">
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
        <div className="flex justify-center gap-4 mt-10 text-primary-white">
          <div className="text-primary-white text-center">
            <a href="https://github.com/unb-mds/2024-1-EducaMinas-frontend" target="_blank" rel="noopener noreferrer">
              FrontEnd
            </a>
          </div>
          |
          <div className="text-primary-white">
            <a href="https://github.com/unb-mds/2024-1-EducaMinas-backend" target="_blank" rel="noopener noreferrer">
              BackEnd
            </a>
          </div>
          |
          <div className="text-primary-white">
            <a href="https://unb-mds.github.io/2024-1-EducaMinas-frontend/" target="_blank" rel="noopener noreferrer">
              Documentação
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
