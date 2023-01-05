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

// 1.A. Importujesz componenty       -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

import styles from "src/styles/sass/styles-all.module.scss";
// import aComponent from "... Z COMPONENTOWEGO FOLDERU, czyli folderu obok "pages""
// import bComponent from - I I -

// A to przyklad componentu - np. podstrony, w którą wchodzimy przez stronę główną najczesciej & wchodiz sie na nia wlasnie slugiem takim,
// Slug to też zgodnie  znazwą folderu, czyli tu byłby głupi slug "podstrona1" - wiadomo, w realu nazwałbyś to sensownie
//
const PodstronaJeden = () => {
  return (
    <div className={styles["layout__podstrona-1-np-o-nas__cala-strona"]}>
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      >
        {/* <aComponent/> */}
      </div>

      <div
        className={styles["layout__podstrona-1-np-o-nas__fragment-2-np-opis"]}
      >
        {/* <bComponent/> */}
      </div>
    </div>
  );
};
export default PodstronaJeden;
