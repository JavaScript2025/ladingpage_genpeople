import Footer from "../components/footer/Footer";
import { ListaProdutos } from "../components/listaProdutos/ListaProdutos";
import Navbar from "../components/navbar/Navbar";


export function Products() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ListaProdutos /> 
      </main>
      <Footer />
    </>
  );
}