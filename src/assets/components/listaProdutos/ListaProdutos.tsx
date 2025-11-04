import type { Produto } from "../../../types/Produto";
import { CardProduto } from "./../cardProduto/CardProduto";
import produtosData  from "../../../data/rhProdutos.json";

// Afirmação de tipo: garantimos que o JSON corresponde à nossa interface Product
const produtos: Produto[] = produtosData as Produto[];

export function ListaProdutos() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            NOSSAS SOLUÇÕES
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Tecnologia de RH que Transforma
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Módulos integrados para gerenciar do recrutamento ao
            desenvolvimento.
          </p>
        </div>

        {/* Layout de Grid - Tailwind CSS */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
}
