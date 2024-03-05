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
