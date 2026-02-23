//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import ButtonWyboruMetody from "./ButtonWyboruMetody";
import TytulBezTla from "./TytulBezTla";

const WyborMetodySzukaniaMaszyny = ({ activeButton, setActiveButton }) => {
  return (
    <section className={styles["wybor-metody__container"]}>
      {/* //       _._. AA */}
      <TytulBezTla htmlElementType="h1">
        Jak chcesz znaleźć ćwiczenia?
      </TytulBezTla>
      <div className={styles["wybor-metody__buttony"]}>
        <ButtonWyboruMetody
          metoda="qr"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <ButtonWyboruMetody
          metoda="nr"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <ButtonWyboruMetody
          metoda="miesien"
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
    </section>
  );
};
export default WyborMetodySzukaniaMaszyny;

//~~ _. WyborMetodySzukaniaMaszyny
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
