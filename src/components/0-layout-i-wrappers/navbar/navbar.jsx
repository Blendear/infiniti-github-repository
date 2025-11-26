import styles from "src/styles/sass/styles-all.module.scss";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../store/redux/store-redux";
import MenuModal from "../../wszechobecne-na-roznych-podstronach/menu-modal/menu-modal";
import { LuDumbbell } from "react-icons/lu";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const handleCloseDialogModal = () => {
    document.body.classList.remove(styles["modal-open"]);
  };

  const handlerToggleMenuIsOpen = (event) => {
    event.preventDefault();

    handleCloseDialogModal();
    // console.log(`state reduxowy : ${reduxStateIsMenuOpen}`);

    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: !reduxStateIsMenuOpen,
      })
    );
  };

  return (
    <div>
      <nav className={styles["navbar-gorny__caly-container"]}>
        <Link href="https://infiniti-kk-cms.efitness.com.pl/Login/SystemLogin?returnurl=https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a
            className={styles["navbar-gorny__caly-container__btn-zaloguj--svg"]}
          >
            <HiOutlineUserCircle />
          </a>
        </Link>

        <div
          className={styles["navbar-gorny__caly-container__linia-dzielaca--0"]}
        ></div>

        <Link href="/infiniti-app?method=qr">
          <a
            className={
              styles["navbar-gorny__caly-container__infiniti-app--svg"]
            }
          >
            <LuDumbbell />
          </a>
        </Link>
        <Link href="/infiniti-app?method=qr">
          <a
            className={
              styles["navbar-gorny__caly-container__btn-zaloguj--tekst"]
            }
          >
            INFINITI APP
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

        <Link
          // href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec"
          href="https://infiniticentrumzdrowia.gymmanager.io/"
        >
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
