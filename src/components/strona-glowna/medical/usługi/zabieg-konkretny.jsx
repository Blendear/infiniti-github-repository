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
import Image from "next/image";
const ZabiegKonkretny = (props) => {
  const [isAktywnyBoolean, setIsAktywnyBoolean] = useState(false);
  const handlerToggleIsAktywny = () => {
    setIsAktywnyBoolean(!isAktywnyBoolean);
  };

  return (
    <li
      className={
        styles[
          "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container"
        ]
      }
    >
      <span
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-ikona-i-klocek-gradientowy"
          ]
        }
      ></span>

      <span
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--svg"
          ]
        }
      >
        {props.svgComponent}
      </span>
      <h3
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-nazwa"
          ]
        }
      >
        {props.tytulZAbiegu}
      </h3>
      {props.isNowoscIMaFoty && (
        <h6
          className={
            styles[
              "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--nowosc"
            ]
          }
        >
          {/* {props.isNowoscIMaZnaczek} */}
          NOWOŚĆ
        </h6>
      )}
      <span
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--linia-boczna"
          ]
        }
      ></span>

      <ul
        className={
          isAktywnyBoolean === true
            ? styles[
                "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container"
              ]
            : `${styles["menu-modal__closed-variant"]} `
        }
      >
        <div
          className={
            styles[
              "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__fota-nowosc"
            ]
          }
        ></div>

        <SzczegolKonkretny
          tresc={props.e}
          tytul="EFEKTY ZDROWOTNE"
          svgIcon={<AiFillHeart />}
          // isNowoscIMaFoty={props.isNowoscIMaFoty ? props.isNowoscIMaFoty : null}
          fotaTyczySieTegoSzczegolu={
            props.fotaTyczySieTegoSzczegolu
              ? props.fotaTyczySieTegoSzczegolu
              : null
          }
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
      </ul>
      {/* {props.isRozwiniety !== true && <div style={{ color: "white" }}>I</div>} */}
    </li>
  );
};
export default ZabiegKonkretny;
