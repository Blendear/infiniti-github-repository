////
////
////~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
////
////       A.1. parent rozdział nr 1
// //
// //           A.1.1. child rozdział nr 1
// //
////~~ B.  Historyjka druga ...
////

// 1. Importujesz componenty    -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// 2. Containeruję              -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery      -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

// import styles from "src/styles/sass/styles-all.module.scss";
// import aComponent from "... Z COMPONENTOWEGO FOLDERU, czyli folderu obok "pages""
// import bComponent from - I I -

// A to przyklad strony kolejnej - np. podstrony, w którą wchodzimy przez stronę główną najczesciej & wchodiz sie na nia wlasnie slugiem takim,
// Slug to też zgodnie  znazwą folderu, czyli tu byłby głupi slug "podstrona2" - wiadomo, w realu nazwałbyś to sensownie
//
// const PodstronaDwa = () => {
//   return (
//
//          <div className={styles["layout__podstrona-2-np-cennik__cala-strona"]}>
//
//                  <div className={styles["layout__podstrona-2-np-cennik__fragment-1-np-lista-pozycji-z-cenami"]}>
//
//                          <aComponent/>
//
//                  </div>;
//
//                  <div className={styles["layout__podstrona-2-np-cennik__fragment-2-np-miejsce-na-wiadomosc-w-razie-pytan"]}>
//
//                          <bComponent/>
//
//                  </div>;
//          </div>;
//
//          )
// };
// export default PodstronaDwa;
