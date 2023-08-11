//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import ButtonWyboruMetody from "./ButtonWyboruMetody";
import TytulBezTla from "./TytulBezTla";

const WyborMetodySzukaniaMaszyny = ({ activeButton, setActiveButton }) => {
  return (
    <div className={styles["wybor-metody__container"]}>
      {/* //       _._. AA */}
      <TytulBezTla>JAK CHCESZ ZNALEŹĆ ĆWICZENIA?</TytulBezTla>
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
    </div>
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
