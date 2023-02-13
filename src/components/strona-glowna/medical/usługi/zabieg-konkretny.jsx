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

import SzczegolKonkretny from "./szczegol-konkretny";

import { useState } from "react";

const ZabiegKonkretny = (props) => {
  return (
    <div
      className={
        styles[
          "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container"
        ]
      }
    >
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-ikona-i-klocek-gradientowy"
          ]
        }
      >
        {props.svgComponent}
      </div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-nazwa"
          ]
        }
      >
        tytul zabiegu
      </div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--linia-boczna"
          ]
        }
      ></div>
      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        <SzczegolKonkretny />
        <SzczegolKonkretny />
        <SzczegolKonkretny />
        <SzczegolKonkretny />
      </div>
    </div>
  );
};
export default ZabiegKonkretny;
