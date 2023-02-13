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

import OsobaKonkretna from "./osoba-konkretna";

const RolaRozdzial = (props) => {
  // console.log(props.rola);

  // \/ hook1 - render for each element in array wymaga stworzenai arrayu
  // of componentow (np. divow, or custom componentow)

  const osobyOTejRoli = props.rola.map((dane, index) => (
    <OsobaKonkretna key={index} daneOOsobie={dane}>
      {/* osobaData.nazwisko */}
    </OsobaKonkretna>
  ));
  // console.log(osobyOTejRoli);

  return (
    <div
      className={
        styles[
          "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container"
        ]
      }
    >
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container--tytul-ikona-i-klocek-gradientowy"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container--tytul-nazwa"
          ]
        }
      >
        {props.nazwaRoli}
      </div>
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container--linia-boczna"
          ]
        }
      ></div>
      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {osobyOTejRoli}
      </div>
    </div>
  );
};
export default RolaRozdzial;
