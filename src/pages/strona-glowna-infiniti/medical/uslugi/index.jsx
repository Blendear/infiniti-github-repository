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

import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import ZabiegKonkretny from "../../../../components/strona-glowna/medical/usługi/zabieg-konkretny";

import SVGSolux from "../../../../components/strona-glowna/medical/usługi/svg/svg-solux.jsx";
import SVGLaser from "../../../../components/strona-glowna/medical/usługi/svg/svg-laser.jsx";
import SVGDrenaz from "../../../../components/strona-glowna/medical/usługi/svg/svg-drenaz";
import SVGElektro1 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-1";
import SVGElektro2 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-2";
import SVGElektro3 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-3";
import SVGElektro4 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-4";
import SVGWodor from "../../../../components/strona-glowna/medical/usługi/svg/svg-wodor";
import SVGUltradzwiek from "../../../../components/strona-glowna/medical/usługi/svg/svg-dzwiek";
import SVGMagnet from "../../../../components/strona-glowna/medical/usługi/svg/svg-magnet";

const kolorSVG = "#ffffff";

const MedicalUslugi = () => {
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
          ? styles["layout__medical-uslugi__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-Medical.png" />
      <ZmienneStartoweLogo logoPath="logo-Medical.jpg" />
      <div
        className={
          styles["layout__medical-uslugi__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="USŁUGI" />
      </div>
      <div
        className={
          styles["layout__medical-uslugi__cala-strona__lista-zabiegow"]
        }
      >
        {/* //hook1 - daloby sie to zrobisz szycbiej, robic plik z danymi i mapujac renderujaco, prawda? \/*/}
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGSolux mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGLaser mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGDrenaz mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGElektro1 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGElektro2 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGElektro3 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGElektro4 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGUltradzwiek mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGMagnet mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          tytulZAbiegu="aa"
          svgComponent={<SVGWodor mojKolor={kolorSVG} />}
        />
      </div>
    </div>
  );
};
export default MedicalUslugi;
