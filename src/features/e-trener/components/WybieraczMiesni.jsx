//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { useState } from "react";
import PotwierdzPrzycisk from "./PotwierdzPrzycisk";

const WybieraczMiesni = ({ propA, propB }) => {
  const [wybranyMiesien, setWybranyMiesien] = useState("");

  return (
    <div className={styles["container__css-class-name"]}>
      <TytulBezTla>KLIKNIJ W MIĘSIEŃ & ZATWIERDŹ</TytulBezTla>

      <div className={styles["child__css-class-name"]}>[Fota interaktywna]</div>

      {wybranyMiesien && (
        <PotwierdzPrzycisk bgColor="green">{wybranyMiesien}</PotwierdzPrzycisk>
      )}
    </div>
  );
};
export default WybieraczMiesni;

//~~ _. WybieraczMiesni
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
