// import { ListaProdutos } from "../components/listaProdutos/ListaProdutos";

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Gen People</h2>
            <p className="text-xl text-center">
              Soluções completas em tecnologia para gestão de pessoas.
            </p>
            {/* <p className="text-xl text-center">O que um Sistema de RH Faz?
Um sistema completo de RH abrange diversas funcionalidades, transformando tarefas manuais em processos automatizados e otimizados:

Departamento Pessoal (DP): Automatiza rotinas como folha de pagamento, controle de ponto, gestão de férias, benefícios e a conformidade com as leis trabalhistas.

Recrutamento e Seleção (R&S): Utiliza ferramentas como ATS (Applicant Tracking System) para gerenciar vagas, fazer a triagem automática de currículos com base em filtros e garantir a aderência do candidato à cultura da empresa.</p> */}

            <div className="flex justify-around gap-4"></div>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://i.imgur.com/L84DubB.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      {/* <ListaProdutos /> */}
    </>
  );
}

export default Home;
