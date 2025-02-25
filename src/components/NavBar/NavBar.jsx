import { FaUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import {
  MdHistory,
  MdOutlineContentPasteSearch,
  MdOutlineMenuOpen,
} from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { TbFileDollar } from 'react-icons/tb';

export default function NavBar() {
  return (
    <section className='navbar'>

      <div className="navbar__menu">
        <MdOutlineMenuOpen />
      </div>

      <div className='navbar__user'>
        <FaUser />
      </div>

      <nav className='navbar__links'>
        <li>
          <GoHome />
        </li>
        <li>
          <TbFileDollar />
        </li>
        <li>
          <MdOutlineContentPasteSearch />
        </li>
        <li>
          <MdHistory />
        </li>
      </nav>

      <div className='navbar__logout'>
        <RxExit />
      </div>
      
    </section>
  );
}
