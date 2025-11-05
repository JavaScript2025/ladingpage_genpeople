import { ListaProdutos } from "../components/listaProdutos/ListaProdutos"

import stats from "../../data/stats.json";
import { ComoFunciona } from "../components/comofunciona/ComoFunciona";

function Home() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="container grid grid-cols-1 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-7xl font-bold bg-gradient-to-r from-[#712A6B] via-[#F98737] to-[#2F4A94] bg-clip-text text-transparent pb-2 pt-20">
              Gen People
            </h2>
            <h3 className="text-4xl font-bold">Inteligente e Automatizada</h3>
            <p className="text-1xl text-center mx-50">
              Simplifique processos de RH, aumente a produtividade e tome
              decisões baseadas em dados com nossa plataforma completa.
            </p>
            <div className="flex justify-around gap-4"></div>
          </div>
          <div className="flex justify-center ">
            {/* <img
              src="https://i.imgur.com/L84DubB.png"
              alt="Imagem Página Home"
              className="w-2/3"
            /> */}
          </div>
        </div>
      </div>
      <ListaProdutos />
      <section className="py-20 px-4 bg-primary text-primary-foreground bg-[#DCECF2]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <ComoFunciona />
    </>
  );
}

export default Home;
