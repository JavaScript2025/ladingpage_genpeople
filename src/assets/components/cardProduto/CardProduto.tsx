import { type Produto } from '../../../types/Produto';

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  const { titulo, subtitulo, descricao } = produto;

  return (
    // Tailwind CSS direto no componente para definir o estilo do Card
    <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white border border-gray-100 transform hover:scale-[1.02]">
      
      {/* Ícone ou Elemento de Destaque (Placeholder simples) */}
      <div className="p-3 w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-4">
        <span className="text-xl">🛠️</span>
      </div>

      {/* Título e Subtítulo */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{titulo}</h3>
      <p className="text-md font-semibold text-indigo-600 mb-3">{subtitulo}</p>
      
      {/* Descrição */}
      <p className="text-gray-600 text-base leading-relaxed">{descricao}</p>
      
      {/* Botão de CTA (Exemplo) */}
      <a 
        href={`/produtos/${produto.id}`} 
        className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
      >
        Saiba Mais →
      </a>
    </div>
  );
}