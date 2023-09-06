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
import Image from "next/image";
const SzczegolKonkretny = (props) => {
  const [isAktywnySzczegolBoolean, setIsAktywnySzczegolBoolean] =
    useState(false);
  const handlerToggleIsAktywny = () => {
    setIsAktywnySzczegolBoolean(!isAktywnySzczegolBoolean);
  };

  return (
    <li
      onClick={handlerToggleIsAktywny}
      className={
        styles[
          "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container"
        ]
      }
    >
      <span
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--klocek"
          ]
        }
      >
        {/* klocek */}
      </span>
      <span
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--svg"
          ]
        }
      >
        {props.svgIcon}
      </span>
      <h4
        className={
          styles[
            "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tytul"
          ]
        }
      >
        {props.tytul}
      </h4>

      {props.isNowoscIMaFoty ? (
        <div
          className={
            isAktywnySzczegolBoolean === true
              ? styles[
                  "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-tlo-foty-zastepujacej-tekst"
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
          <div
            className={
              isAktywnySzczegolBoolean === true
                ? styles[
                    "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-fota-zamiast-tekstu"
                  ]
                : styles["menu-modal__closed-variant"]
            }
          >
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/medical/usługi/wodor.png`}
              alt={`...`}
              // height={300}
              // width={150}
              layout="fill"
              objectFit="contain"
              // quality={80}
              priority
              loading="eager"
            />
          </div>
        </div>
      ) : (
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
      )}

      {/* <div
        className={
          isAktywnySzczegolBoolean === true
            ? styles[
                "layout__medical-uslugi__cala-strona__lista-zabiegow__konkretny-zabieg-container__lista-szczegolow-danego-zabiegu-container__konkretny-szczegol-container--tresc-tekst"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {props.tresc}
      </div> */}
    </li>
  );
};
export default SzczegolKonkretny;
