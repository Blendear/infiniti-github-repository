import styles from "src/styles/sass/styles-all.module.scss";

import { HiOutlineUserCircle } from "react-icons/hi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

import Link from "next/link";

import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../store/redux/store-redux";
import MenuModal from "../../wszechobecne-na-roznych-podstronach/menu-modal/menu-modal";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const handlerToggleMenuIsOpen = (event) => {
    event.preventDefault();

    console.log(`state reduxowy : ${reduxStateIsMenuOpen}`);

    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: !reduxStateIsMenuOpen,
      })
    );
  };

  return (
    // hook2 - WHY THE FUCK nie dziala to z position absoulute jako parent? chodzi
    // o jakas dziką zależnośc child-parent przy "positon:sticky" pewnie, ale jprl
    // <div className={styles["navbar-gorny__absolute-positioning"]}>
    <div className={styles[""]}>
      {/* https://infiniti-kk-cms.efitness.com.pl/Login/SystemLogin?returnurl=https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec */}

      <nav className={styles["navbar-gorny__caly-container"]}>
        <Link href="https://infiniti-kk-cms.efitness.com.pl/Login/SystemLogin?returnurl=https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a
            className={styles["navbar-gorny__caly-container__btn-zaloguj--svg"]}
          >
            <HiOutlineUserCircle />
          </a>
        </Link>
        <Link href="https://infiniti-kk-cms.efitness.com.pl/Login/SystemLogin?returnurl=https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a
            className={
              styles["navbar-gorny__caly-container__btn-zaloguj--tekst"]
            }
          >
            ZALOGUJ SIĘ
          </a>
        </Link>

        <div
          className={styles["navbar-gorny__caly-container__linia-dzielaca--1"]}
        ></div>
        <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a
            className={styles["navbar-gorny__caly-container__btn-zapisz--svg"]}
          >
            <RiCalendarCheckLine />
          </a>
        </Link>

        <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a
            className={
              styles["navbar-gorny__caly-container__btn-zapisz--tekst"]
            }
          >
            ZAPISZ SIĘ
          </a>
        </Link>

        <div
          className={styles["navbar-gorny__caly-container__linia-dzielaca--2"]}
        ></div>
        <button
          className={styles["navbar-gorny__caly-container__btn-menu--svg"]}
        >
          {reduxStateIsMenuOpen === false ? (
            <GiHamburgerMenu onClick={handlerToggleMenuIsOpen} />
          ) : (
            <IoMdCloseCircle onClick={handlerToggleMenuIsOpen} />
          )}
        </button>
      </nav>
      <MenuModal />
    </div>

    //
  );
};

export default Navbar;

//

//

// stary, rozwijany navbar - hook2 \/

// //
// //  Navbar = Nawigacja (np. na górze ekranu) mojej strony
// //
// //~~ A.  Wizual - Ikonki i nazwy w menu głównym   &   Rozwijane Menu
// //
// //
// //       A.-1. Conditional pokazywany / hideowany
// //
// //            A.-1.0. Upozycjonowanie ikonek
// //
// //            A.-1.1. Widoczny = Ikonka "|||"   &   stwórz prostokąt z miejscami na menu główne
// //
// //            A.-1.2. Niewidoczny = Ikonka "X"   &   hide prostokat z miejscami na menu główne
// //
// //       A.0. | | | - ikonka do rozwinięcia menu
// //
// //       A.1. Menu główne & (Opconalne) Poszczególne rozwijane menu'sy - ikona i nazwa > podikony i podnazwy
// //
// //            A.1.1. Import
// //
// //            A.1.2. Użycie
// //
// //~~ B.  Data - jakie ikony, nazwy, do jakiej pozycji w menu
// //
// //       B.1. Import

// import { useState } from "react";

// //            A.1.1. Import
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons/lib";

// //       B.1. Import
// import { navbarData } from "./navbarData";

// //            A.1.1. Import
// import RozwijaneMenu from "./RozwijaneMenu";

// const [navbarWidoczny, setnavbarWidoczny] = useState(false);

// const handlerShowNavbar = () => {
//   console.log({ navbarWidoczny });
//   setnavbarWidoczny(!navbarWidoczny);
// };

// <nav className={styles["layout-strona-glowna__navbar-gorny"]}>
//         {/*
//     //            A.-1.0. Upozycjonowanie ikonek
//     */}
//         {/*
//     //            A.-1.1. Widoczny = Ikonka "|||"   &   stwórz prostokąt z miejscami na menu główne
//     */}
//         <button
//           className={
//             navbarWidoczny
//               ? styles["layout-strona-glowna__navbar-gorny__III--open"]
//               : styles["layout-strona-glowna__navbar-gorny__III--closed"]
//           }
//           onClick={handlerShowNavbar}
//         >
//           <FaIcons.FaBars />
//         </button>
//         {/*
//     //            A.-1.2. Niewidoczny = Ikonka "X"   &   hide prostokat z miejscami na menu główne
//     */}
//         <button
//           className={
//             !navbarWidoczny
//               ? styles["layout-strona-glowna__navbar-gorny__X--open"]
//               : styles["layout-strona-glowna__navbar-gorny__X--closed"]
//           }
//           onClick={handlerShowNavbar}
//         >
//           <AiIcons.AiOutlineClose />
//         </button>

//         {/*
//     //       A.1. Menu główne & (Opconalne) Poszczególne rozwijane menu'sy - ikona i nazwa > podikony i podnazwy
//     */}
//         {navbarData.map((pozycjaMenu, indexPozycjiMenu) => {
//           return (
//             <RozwijaneMenu
//               pozycjaMenuProperty={pozycjaMenu}
//               key={indexPozycjiMenu}
//             />
//           );
//         })}
//       </nav>
