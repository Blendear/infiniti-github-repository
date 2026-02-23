//
//
//~~ MedicalKadra.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       MedicalKadra.1. parent rozdział nr 1
//
//           MedicalKadra.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import RolaRozdzial from "../../../../components/strona-glowna/medical/kadra/rola-rozdzial";
import { kadraMedicalDataArray } from "../../../../components/strona-glowna/medical/kadra/kadraMedicalData";

const MedicalKadra = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen,
  );

  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      }),
    );
  };
  useEffect(() => {
    handlerToggleMenuIsOpen();
  }, []);

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["layout__medical-kadra__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      {/* <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__medical-kadra__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="KADRA" />
      </div>
      <div
        className={
          styles["layout__medical-kadra__cala-strona__tlo-calej-strony"]
        }
      ></div> */}
      <ul className={styles["layout__medical-kadra__cala-strona__lista-rol"]}>
        <RolaRozdzial
          rola={kadraMedicalDataArray.fizjoterapeuci}
          nazwaRoli="Fizjoterapeuci"
        />
        <RolaRozdzial
          rola={kadraMedicalDataArray.masazysci}
          nazwaRoli="Masażyści"
        />
        {/* <RolaRozdzial
          rola={kadraMedicalDataArray.lekarze}
          nazwaRoli="ORTOPEDZI"
        /> */}
        {/* <RolaRozdzial props={kadraMedicalDataArray.trenerzy} /> */}
        {/* <RolaRozdzial /> */}
      </ul>
    </div>
  );
};
export default MedicalKadra;
