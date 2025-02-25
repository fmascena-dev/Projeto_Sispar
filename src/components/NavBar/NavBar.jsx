import { FaUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import {
  MdHistory,
  MdOutlineContentPasteSearch,
  MdOutlineMenuOpen,
} from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { TbFileDollar } from 'react-icons/tb';

import './NavBarStyles.scss';

export default function NavBar() {
  return (
    <section className="navbar">
      <div className="navbar__menu">
        <MdOutlineMenuOpen />
      </div>

      <div className="navbar__user">
        <div className="user">
          <FaUser />
          <h2>Felipe Mascena</h2>
          <p>Front-End Developer</p>
        </div>

        <nav className="navbar__links">
          <ul>
            <li>
              <GoHome />
              <a href="">
                <p>Início</p>
              </a>
            </li>
            <li>
              <TbFileDollar />
              <a href="">
                <p>Reembolsos</p>
              </a>
            </li>
            <li>
              <MdOutlineContentPasteSearch />
              <a href="">
                <p>Análises</p>
              </a>
            </li>
            <li>
              <MdHistory />
              <a href="">
                <p>Histórico</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar__logout">
        <RxExit />
      </div>
    </section>
  );
}
