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
import { useState } from "react";

const SzczegolKonkretny = (props) => {
  const [isAktywnySzczegolBoolean, setIsAktywnySzczegolBoolean] =
    useState(false);
  const handlerToggleIsAktywny = () => {
    setIsAktywnySzczegolBoolean(!isAktywnySzczegolBoolean);
  };

  return (
    <div
      onClick={handlerToggleIsAktywny}
      className={
        styles[
          "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container"
        ]
      }
    >
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--klocek"
          ]
        }
      >
        {/* klocek */}
      </div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--svg"
          ]
        }
      >
        {props.svgIcon}
      </div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tytul"
          ]
        }
      >
        {props.tytul}
      </div>
      <div
        className={
          isAktywnySzczegolBoolean === true
            ? styles[
                "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-tlo"
              ]
            : styles["menu-modal__closed-variant"]
        }

        // ZBEDNE /\ skoro tlo nie powstanie, if no content?

        // className={
        //   styles[
        //     "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-tlo"
        //   ]
        // }
      >
        {/* tresc tlo */}
      </div>
      <div
        className={
          isAktywnySzczegolBoolean === true
            ? styles[
                "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-tekst"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {props.tresc}
      </div>
    </div>
  );
};
export default SzczegolKonkretny;
