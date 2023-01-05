////
////
////~~ A.  Zaciagam info o trenerach
////
////       A.1. Baza danych importowana
// //
// //           A.1.1.
// //
////~~ B. Pokazuję fote, imie, n aziwsko, social media - adekwatne do trenera
////
////       B.1. Miejsce - na wyświetlenie data
// //
// //           B.1.1. Zaludnienie - (KOLEJNOŚĆ RĘCZNA) konkretnymi osobami

import styles from "src/styles/sass/styles-all.module.scss";
////
////~~ A.  Zaciagam info o trenerach
////
////       A.1. Baza danych importowana
// //
import { kadraDataArray } from "./kadraData";
import Image from "next/image";

// D:\Apka React JS\infiniti-stronka\public\images\.dedykowane-do-strony-konkretnej\fitness\kadra\bator-monika.jpg
const Kadra = () => {
  return (
    <div className={styles["layout__fitness-kadra__cala-strona"]}>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__recepcja-wiersz"]
        }
      >
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--jeden"]
          }
        >
          {/* RECEPCJA */}
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--jeden--foto"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--dwa"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--dwa--foto"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz"]
        }
      >
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--jeden"]
          }
        >
          {/* <aComponent/> */}TRENERZY
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwa"]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--trzy"]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--cztery"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--piec"]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--szesc"]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--siedem"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--osiem"]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dziewiec"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dziesiec"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--jedenascie"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwanascie"
            ]
          }
        >
          {/* <aComponent/> */}
        </div>
      </div>
      <div
        className={styles["layout__fitness-kadra__cala-strona__manager-wiersz"]}
      >
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__manager-wiersz--jeden"]
          }
        >
          MANAGER
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__manager-wiersz--napis-kadra"
            ]
          }
        >
          {" "}
        </div>
      </div>
    </div>
  );
};
export default Kadra;

// data kadry stworz
// 2. containery pobuduj

// 3. w każdy z trzech wsadź
//
//
//
//
