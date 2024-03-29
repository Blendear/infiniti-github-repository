//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import TytulPodstronyFitness from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony-fitness";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";
import Link from "next/link";
import Image from "next/image";
const FitnessCennik = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      })
    );
  };
  useEffect(() => {
    handlerToggleMenuIsOpen();
  }, []);

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["layout__fitness-cennik__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__fitness-cennik__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstronyFitness nazwaPodstrony="CENNIK" />
      </div>
      <div
        className={
          styles["layout__medical-cennik__cala-strona__tlo-calej-strony"]
        }
      ></div>
      <button
        className={
          styles[
            "layout__fitness-cennik__cala-strona__kup-karnet-button-cennik-fitness"
          ]
        }
      >
        <Link
          // target="_blank"
          download
          href="https://infiniti-kk-cms.efitness.com.pl/kup-karnet"
        >
          <a target="_blank">KUP KARNET</a>
        </Link>
      </button>
      <article
        className={styles["layout__fitness-cennik__cala-strona__cennik"]}
      >
        <Link
          // target="_blank"
          download
          href="/images/.dedykowane-do-strony-konkretnej/fitness/cennik/cennik-fitness.png"
        >
          <a target="_blank">
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/fitness/cennik/cennik-fitness.png`}
              alt={`Cennik usług fitness, jakie oferuje klub INFINITI`}
              layout="fill"
              objectFit="contain"
              loading="eager"
              priority
            />
          </a>
        </Link>
      </article>
    </div>
  );
};
export default FitnessCennik;
