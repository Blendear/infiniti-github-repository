//  Problemy do rozwiązania poniższymi rozdziałami liczbowymi:
//
//~~ A.  ZAWSZE istniejąca część na dole każdej strony
//
//           1.  Footer - customowa część customowego "Layout" component, w którego wrappuje glówny <App> component
//
//               1.1. Zaciągnięcie czasu dla Polski
//
//               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a
//
//~~ B.  Timer działający na podstawie inputów: herehere19.10.2022
//
//       B.0. Funkcjonujący licznik sekund, przerobiony na visual w formacie "hh:mm:ss"
//
//       B.a. w jakim momencie timera mam dac howlera
//
//       B.b. button - start timer
//
//       B.c. button - stop timer

//~~ C.  Tworzę checkpoint "przy jakim czasie ma sie wydrazyc alarm X"
//
//~~ D.  Odpalam dźwięk i zmieniam kolor timera
import styles from "src/styles/sass/styles-all.module.scss";

const Footer = () => {
  return <h1 className={styles.footer}> Footer moj</h1>;
};

export default Footer;
