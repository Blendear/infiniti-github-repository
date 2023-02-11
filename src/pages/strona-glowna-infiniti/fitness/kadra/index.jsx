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

import { kadraFitnessDataArray } from "../../../../components/strona-glowna/fitness/kadra/kadraFitnessData";
import RolaRozdzial from "../../../../components/strona-glowna/fitness/kadra/rola-rozdzial";

const FitnessKadra = () => {
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
          ? styles["layout__fitness-kadra__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-Fitness.png" />
      <ZmienneStartoweLogo logoPath="logo-Fitness.jpg" />
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="KADRA" />
      </div>
      <div className={styles["layout__fitness-kadra__cala-strona__lista-rol"]}>
        <RolaRozdzial
          rola={kadraFitnessDataArray.manager}
          nazwaRoli="MANAGER"
        />
        <RolaRozdzial
          rola={kadraFitnessDataArray.recepcja}
          nazwaRoli="RECEPCJA"
        />
        <RolaRozdzial
          rola={kadraFitnessDataArray.trenerzy}
          nazwaRoli="TRENERZY"
        />
      </div>
    </div>
  );
};
export default FitnessKadra;
