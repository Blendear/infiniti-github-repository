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
        {/* NIE BYLOBY JEBANIA SIE z dopasowywaniem tytulow etc. mhmmm */}
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="LAMPA SOLLUX"
          svgComponent={<SVGSolux mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="LASEROTERAPIA"
          svgComponent={<SVGLaser mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="DRENAŻ LIMFATYCZNY"
          svgComponent={<SVGDrenaz mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="ELEKTROSTYMULACJA"
          svgComponent={<SVGElektro1 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="ELEKTROTERAPIA"
          svgComponent={<SVGElektro2 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="INETRFERENCJA"
          svgComponent={<SVGElektro3 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="DIADYNAMIKA"
          svgComponent={<SVGElektro4 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwbólowe</li>
              <li>działanie rozluźniające</li>
              <li>przyspieszenie gojenia</li>
            </ul>
          }
          d={
            <ul>
              <li>
                {
                  "stanów pourazowych (naderwaniach, skręceniach, zwichnięciach, złamaniach)"
                }
              </li>
              <li>chorób zwyrodnieniowych kręgosłupa i stawów</li>
              <li>ostrogi piętowej</li>
              <li> leczenia obrzęków o charakterze limfatycznym</li>
              <li>
                chorób reumatycznych, – leczenia przykurczów, blizn, krwiaków
              </li>
            </ul>
          }
          j={
            <ul>
              <li>zabieg nieodczuwalny dla pacjenta</li>
              <li>średni czas zabiegu wynosi ok. 4-10 minut</li>
              <li>
                {" "}
                {
                  "dokładnie rzecz biorąc - ultradźwięki to fale akustyczne o wysokiej częstotliwości (1-3 MHz). Tkanka naświetlana tego typu falami podczas zabiegu podlega mikro-masażowi, którego efektem jest zwiększona temperatura i przyspieszone mikrokrążenie. Dodatkowo ultradźwięki rozluźniają mięśnie. W związku z tym jest to zabieg idealny dla sportowców. Ultradźwięki w fizykoterapii aplikowane są za pomocą głowicy, a na skórę używana jest substancja sprzęgająca (żel) lub lek w postaci leku (zabieg ten nazywamy wtedy fonoforezą)."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>nowotwory i stany po ich operacyjnym usunięciu</li>
              <li>ciąża</li>
              <li>cukrzyca</li>
              <li>czynne procesy gruźlicze</li>
              <li>skazy krwotoczne</li>
              <li>niewydolność</li>
              <li> krążenia i zaburzenia rytmu serca</li>
              <li>ciężki stan ogólny</li>
              <li>niezakończony wzrost kości w obszarze tarczy wzrostowej</li>
              <li>nerwobóle niewyjaśnionego pochodzenia</li>
              <li>ostre procesy zapalne i stany gorączkowe</li>
              <li>zaburzenia ukrwienia obwodowego</li>
              <li>elektroniczne i metalowe implanty</li>
              <li>neuropatie</li>
              <li>zakrzepowe zapalenie żył</li>
              <li>wypadanie krążka międzykręgowego</li>
              <li>tany po wycięciu łuku kręgowego</li>
              <li>
                w przypadku implantów i endoprotez należy zachować środki
                ostrożności
              </li>
            </ul>
          }
          tytulZAbiegu="ULTRADŹWIĘKI"
          svgComponent={<SVGUltradzwiek mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="POLE MAGNETYCZNE"
          svgComponent={<SVGMagnet mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          d={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          j={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          p={
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          }
          tytulZAbiegu="INHALACJA AKTYWNEGO WODORU"
          svgComponent={<SVGWodor mojKolor={kolorSVG} />}
        />
      </div>
    </div>
  );
};
export default MedicalUslugi;
