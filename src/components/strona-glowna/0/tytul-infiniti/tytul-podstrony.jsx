import SVGTytulINFINITI from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";

const TytulINFINITI = (props) => {
  return (
    <div className={styles["layout__strona-glowna__cala-strona__tytul"]}>
      <div className={styles["layout__strona-glowna__cala-strona__tytul--svg"]}>
        <SVGTytulINFINITI />
      </div>

      <h1
        className={styles["layout__strona-glowna__cala-strona__tytul--tekst"]}
      >
        CENTRUM ZDROWIA
      </h1>
    </div>
  );
};
export default TytulINFINITI;
