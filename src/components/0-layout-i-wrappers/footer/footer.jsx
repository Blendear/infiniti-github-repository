// //
// //  Footer = Dopisek na dole mojej strony (np. kontakt, copyright etc.)
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

// 1. Importujesz componenty         -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// ||
// 1.B. Piszesz już kod oryginalny   -    Bo gdzieś musisz w końcu zacząć go pisac. Nie można dzielić na componenty w nieskończoność
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

import styles from "src/styles/sass/styles-all.module.scss";

import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";

// import {aComponent, bComponent} from "...COMPONENT folder..."

const Footer = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["footer__caly-container"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <div className={styles["footer__caly-container__costam"]}>FOOTER</div>
    </div>
  );
};
export default Footer;

//
//
// Dorób classy dla każdego elementu   &   przypisz je placeholderom przedstawiajacymi fragmnenty daneo fragmentu (np. strzalki, foty i obramowki galerii carousel fot miejsc)
//
//
//
