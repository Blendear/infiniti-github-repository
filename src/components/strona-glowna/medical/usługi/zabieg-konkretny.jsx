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
    <div
      className={
        styles[
          "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container"
        ]
      }
    >
      <div
        //hook1 - trap1 - jesli cos ma byc buittonem, DAJ TEMU OSOBNY PARENT ELEMENT, inaczjer jak tutaj, musialem stworzyc 3 onlicki, co nie jest optymlane
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-ikona-i-klocek-gradientowy"
          ]
        }
      ></div>

      <div
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--svg"
          ]
        }
      >
        {props.svgComponent}
      </div>
      <div
        onClick={handlerToggleIsAktywny}
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--tytul-nazwa"
          ]
        }
      >
        {props.tytulZAbiegu}
      </div>
      {props.isNowoscIMaFoty && (
        <div
          className={
            styles[
              "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--nowosc"
            ]
          }
        >
          {/* {props.isNowoscIMaZnaczek} */}
          NOWOŚĆ
        </div>
      )}
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container--linia-boczna"
          ]
        }
      ></div>

      <div
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
        >
          {/* {props.isNowoscIMaFoty && (
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/medical/usługi/wodor.png`}
              alt={`nie pyklo zdjecie`}
              height={300}
              width={150}
              layout="responsive"
              objectFit="contain"
              // quality={50}
              priority
              loading="eager"
            />
          )} */}
        </div>

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
      {/* {props.isRozwiniety !== true && <div style={{ color: "white" }}>I</div>} */}
    </div>
  );
};
export default ZabiegKonkretny;
