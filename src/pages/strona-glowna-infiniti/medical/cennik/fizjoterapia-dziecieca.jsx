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

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import Image from "next/image";
import Link from "next/link";
const MedicalCennik = () => {
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
          ? styles["layout__medical-cennik__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__medical-cennik__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="CENNIK" />
      </div>
      <div
        className={
          styles["layout__medical-cennik__cala-strona__tlo-calej-strony"]
        }
      ></div>
      <article
        className={styles["layout__medical-cennik__cala-strona__cennik-dzieci"]}
      >
        <Link
          download
          href="/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-dzieci.png"
        >
          <a target="_blank">
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-dzieci.png`}
              alt={`Cennik usług medycznych dla dzieci`}
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </a>
        </Link>
      </article>
      <article
        className={styles["layout__medical-cennik__cala-strona__cennik-1"]}
      >
        <Link
          download
          href="/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-medical.png"
        >
          <a target="_blank">
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-medical.png`}
              alt={`Cennik usług medycznych w INFINITI`}
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </a>
        </Link>
      </article>
      <article
        className={styles["layout__medical-cennik__cala-strona__cennik-2"]}
      >
        <Link
          download
          href="/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-fizjo.png"
        >
          <a target="_blank">
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-fizjo.png`}
              alt={`Cennik usług fizjoterapeutycznych w INFINITI`}
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </a>
        </Link>
      </article>
    </div>
  );
};
export default MedicalCennik;
