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

import { AiFillHeart } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { RiZoomInLine } from "react-icons/ri";
import { TiFlag } from "react-icons/ti";

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
      ></div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--svg"
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
        {props.tytulZAbiegu}
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
        <SzczegolKonkretny
          tresc={props.e}
          tytul="EFEKTY ZDROWOTNE"
          svgIcon={<AiFillHeart />}
        />
        <SzczegolKonkretny
          tresc={props.d}
          tytul="ZALECANE W PRZYPADKU"
          svgIcon={<IoMdPerson />}
        />
        <SzczegolKonkretny
          tresc={props.j}
          tytul="JAK WYGLĄDA"
          svgIcon={<RiZoomInLine />}
        />
        <SzczegolKonkretny
          tresc={props.p}
          tytul="PRZECIWSKAZANIA"
          svgIcon={<TiFlag />}
        />
      </div>
    </div>
  );
};
export default ZabiegKonkretny;
