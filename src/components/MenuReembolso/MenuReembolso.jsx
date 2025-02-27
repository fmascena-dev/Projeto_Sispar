import './MenuReembolsoStyle.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiCornerUpLeft } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward, IoIosList, IoMdClose } from 'react-icons/io';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';

export default function MenuReembolso() {
  return (
    <section className="menu__reembolso">
      <div className="header__reembolso">
        <GoHome />
        <span>
          <IoIosArrowForward />
        </span>
        <p>Reembolsos</p>
      </div>

      <section className='main__reembolso'>
        <div className="title__reembolso">
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
          <a href="#" className='history'>
            <VscHistory />
            <p>Histórico</p>
          </a>
        </div>

        <div className="dados__reembolso">
          <ul>
            <li>
              {' '}
              <FiCornerUpLeft className='arrow' /> <span>182</span> Solicitados
            </li>
            <li>
              {' '}
              <AiOutlineClockCircle className='time' /> <span>74</span> Em análise
            </li>
            <li>
              {' '}
              <img src="/check.svg" alt="" className='check'/>
              <span>195</span> Aprovados
            </li>
            <li>
              {' '}
              <IoMdClose className='reject' />
              <span>41</span> Rejeitados
            </li>
          </ul>
        </div>

        <div className="footer__reembolso">
          <IoCloudDoneOutline />
          <p>Sistema atualizado</p>
        </div>
      </section>
    </section>
  );
}
