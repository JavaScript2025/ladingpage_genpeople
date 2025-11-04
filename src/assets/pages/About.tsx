function About() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold mt-8">Gen People - Sobre nós</h2>
            <p className="text-xl text-justify mt-5">
            Somos uma plataforma digital essencial que centraliza e automatiza os processos e as atividades do setor de Recursos Humanos e Departamento Pessoal de uma organização.

Seu principal objetivo é melhorar a eficiência operacional, reduzir a burocracia e, mais importante, permitir que o RH atue de forma mais estratégica e focada nas pessoas.

            </p>

            <div className="flex justify-around gap-4"></div>
          </div>
          <div className="flex justify-center ">
          <img
              src="https://i.imgur.com/NqR0ka5.png"
              alt="Imagem Página Home"
              className="w-3/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
