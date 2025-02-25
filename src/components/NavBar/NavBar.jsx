import { FaUser } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { MdHistory, MdOutlineContentPasteSearch, MdOutlineMenuOpen } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { TbFileDollar } from 'react-icons/tb';

export default function NavBar() {
  return (
    <>
      <h1>NavBar</h1>
      <MdOutlineMenuOpen />
      <RxExit />
      <FaUser />
      <MdHistory />
      <MdOutlineContentPasteSearch />
      <TbFileDollar />
      <GoHome />
    </>
  );
}
