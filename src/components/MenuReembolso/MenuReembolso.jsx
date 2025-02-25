import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function MenuReembolso() {
    return (
      <section className="menu__reembolso">
        <header>
          <FaHome />
          <IoIosArrowForward />
          <p>Reembolsos</p>
        </header>
        <main>
          <h1>Sistema de Reembolsos</h1>
          <p>
            Solicite novos pedidos de reembolso, visualize solicitações em
            análise e todo o histórico.
          </p>
        </main>
      </section>
    );
};
