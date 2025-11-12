import styles from "src/styles/sass/styles-all.module.scss";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import RolaRozdzial from "../../../../components/strona-glowna/medical/kadra/rola-rozdzial";
import { kadraMedicalDataArray } from "../../../../components/strona-glowna/medical/kadra/kadraMedicalData";

const KadraOrtopedzi = () => {
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
          ? styles["layout__medical-kadra__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
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
      ></div>
      <ul className={styles["layout__medical-kadra__cala-strona__lista-rol"]}>
        <RolaRozdzial
          rola={kadraMedicalDataArray.lekarze}
          nazwaRoli="ORTOPEDZI"
        />
      </ul>
    </div>
  );
};
export default KadraOrtopedzi;
