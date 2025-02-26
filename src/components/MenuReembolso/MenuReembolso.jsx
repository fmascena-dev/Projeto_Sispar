import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { FiCornerUpLeft } from 'react-icons/fi';
import { IoIosArrowForward, IoIosList, IoMdClose } from 'react-icons/io';
import { VscHistory } from 'react-icons/vsc';

export default function MenuReembolso() {
  return (
    <section className="menu__reembolso">
      <div className="header__reembolso">
        <FaHome />
        <IoIosArrowForward />
        <p>Reembolsos</p>
      </div>

      <section className="title__reembolso">
        <div>
          <h1>Sistema de Reembolsos</h1>
          <p>
            Solicite novos pedidos de reembolso, visualize solicitações em
            análise e todo o histórico.
          </p>
        </div>

        <div className="options__reembolso">
          <a href="#">
            <img src="/reembolso1.svg" alt="ícone de uma pasta" />
            <p>Solicitar Reembolso</p>
          </a>
          <a href="#">
            <IoIosList />
            <p>Visualizar análises</p>
          </a>
          <a href="#">
            <VscHistory />
            <p>Histórico</p>
          </a>
        </div>

        <div className="dados__reembolso">
          <ul>
            <li>
              {' '}
              <FiCornerUpLeft /> <span>182</span> Solicitados
            </li>
            <li>
              {' '}
              <AiOutlineClockCircle /> <span>74</span> Em análise
            </li>
            <li>
              {' '}
              <img src="/check.svg" alt="" />
              <span>195</span> Aprovados
            </li>
            <li>
              {' '}
              <IoMdClose />
              <span>41</span> Rejeitados
            </li>
          </ul>
        </div>

        <div className="footer__reembolso">
          <p>Sistema atualizado</p>
        </div>
      </section>
    </section>
  );
}
