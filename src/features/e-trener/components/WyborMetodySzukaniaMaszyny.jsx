//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import ButtonWyboruMetody from "./ButtonWyboruMetody";
import TytulBezTla from "./TytulBezTla";

const WyborMetodySzukaniaMaszyny = ({ propA, propB }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      {/* //       _._. AA */}
      <TytulBezTla>JAK CHCESZ ZNALEŹĆ ĆWICZENIA?</TytulBezTla>
      <ButtonWyboruMetody metoda="qr" />
      <ButtonWyboruMetody metoda="nr" />
      <ButtonWyboruMetody metoda="miesien" />
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
