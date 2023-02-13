import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import KlocekMenu from "./klocek-menu";

import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import Link from "next/link";
//hook1 - gdzie (w navbarze?) i jak (usestate?) włożyć modal? herehere07.02.2023
const MenuModal = (props) => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  return (
    <div
      className={
        reduxStateIsMenuOpen === true
          ? styles["menu-modal__caly-container"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <div className={styles["menu-modal__caly-container__loga--medical"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/menu-modal/loga/logo-Medical.png`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={200}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles["menu-modal__caly-container__loga--fitness"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/menu-modal/loga/logo-Fitness.png`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={200}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-lewe"
          ]
        }
      >
        <Link href="/strona-glowna-infiniti/medical/uslugi">
          <a>
            <KlocekMenu imagePathEnd="klocki/medical-uslugi.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/medical/cennik">
          <a>
            <KlocekMenu imagePathEnd="klocki/medical-cennik.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/medical/kadra">
          <a>
            <KlocekMenu imagePathEnd="klocki/medical-kadra.png" />
          </a>
        </Link>

        {/* <KlocekMenu imagePathEnd="klocek-medical.png" napisTresc="CENNIK" /> */}
      </div>
      <div
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-prawe"
          ]
        }
      >
        {/* <KlocekMenu imagePathEnd="klocki/fitness-grafik.png" /> */}
        <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <a>
            <KlocekMenu imagePathEnd="klocki/fitness-grafik.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/fitness/cennik">
          <a>
            <KlocekMenu imagePathEnd="klocki/fitness-cennik.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/fitness/kadra">
          <a>
            <KlocekMenu imagePathEnd="klocki/fitness-kadra.png" />
          </a>
        </Link>

        {/* <KlocekMenu imagePathEnd="klocek-medical.png" napisTresc="CENNIK" /> */}
      </div>
      <div
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-srodkowe"
          ]
        }
      >
        <Link href="/strona-glowna-infiniti">
          <a>
            <KlocekMenu imagePathEnd="klocki/infiniti-o-nas.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/infiniti/kontakt">
          <a>
            <KlocekMenu imagePathEnd="klocki/infiniti-kontakt-i-dojazd.png" />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/infiniti/do-pobrania">
          <a>
            <KlocekMenu imagePathEnd="klocki/infiniti-do-pobrania.png" />
          </a>
        </Link>

        {/* <KlocekMenu imagePathEnd="klocek-medical.png" napisTresc="CENNIK" /> */}
      </div>
    </div>
  );
};
export default MenuModal;