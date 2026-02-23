import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import KlocekMenu from "./klocek-menu";
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import Link from "next/link";

const MenuModal = (props) => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen,
  );

  const disableBodyOverflow = () => {
    document.body.classList.add(styles["modal-open"]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    if (reduxStateIsMenuOpen === true) {
      disableBodyOverflow();
      scrollToTop();
    }
  }, [reduxStateIsMenuOpen]);

  const handleCloseDialogModal = () => {
    document.body.classList.remove(styles["modal-open"]);
  };

  return (
    <nav
      className={
        reduxStateIsMenuOpen === true
          ? `${styles["menu-modal__caly-container"]} 
          
          `
          : styles["menu-modal__closed-variant"]
      }
    >
      <div className={styles["menu-modal__caly-container__loga--medical"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/logo-Medical.jpg`}
          // public/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/menu-modal/loga/logo-Fitness.png
          alt={`Logo INFINITI Medical`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles["menu-modal__caly-container__loga--fitness"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/logo-INFINITI.jpg`}
          alt={`Logo INFINITI Fitness`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ul
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-lewe"
          ]
        }
        onClick={handleCloseDialogModal}
      >
        <Link href="/strona-glowna-infiniti/medical/kadra-ortopedzi">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/medical-kadra-ortopedzi.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>

        <Link href="/strona-glowna-infiniti/medical/cennik">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/medical-cennik.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/medical/kadra">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/medical-kadra-fizjo.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/medical/uslugi">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/medical-uslugi.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>

        {/* <KlocekMenu imagePathEnd="klocek-medical.png" napisTresc="CENNIK" /> */}
      </ul>
      <ul
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-prawe"
          ]
        }
        onClick={handleCloseDialogModal}
      >
        {/* <KlocekMenu imagePathEnd="klocki/fitness-grafik.png" /> */}
        {/* <Link > */}
        <a href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
          <KlocekMenu
            imagePathEnd="klocki/fitness-grafik.png"
            typKlockaNormalCzyDlugi="normal"
          />
        </a>
        {/* </Link> */}
        <Link href="/strona-glowna-infiniti/fitness/cennik">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/fitness-cennik.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/fitness/kadra">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/fitness-kadra.png"
              typKlockaNormalCzyDlugi="normal"
            />
          </a>
        </Link>

        {/* <KlocekMenu imagePathEnd="klocek-medical.png" napisTresc="CENNIK" /> */}
      </ul>
      <ul
        className={
          styles[
            "menu-modal__caly-container__klocki--container-listujacy-klocki-srodkowe"
          ]
        }
        onClick={handleCloseDialogModal}
      >
        <Link href="/strona-glowna-infiniti">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/infiniti-o-nas.png"
              typKlockaNormalCzyDlugi="dlugi"
            />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/infiniti/kontakt">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/infiniti-kontakt-i-dojazd.png"
              typKlockaNormalCzyDlugi="dlugi"
            />
          </a>
        </Link>
        <Link href="/strona-glowna-infiniti/infiniti/do-pobrania">
          <a>
            <KlocekMenu
              imagePathEnd="klocki/infiniti-do-pobrania.png"
              typKlockaNormalCzyDlugi="dlugi"
            />
          </a>
        </Link>
      </ul>
    </nav>
  );
};
export default MenuModal;
