//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulBezTla = ({ children }) => {
  return (
    <div className={styles["tytul__container"]}>
      <h1 className={styles["tytul--bez-tla"]}>{children}</h1>
    </div>
  );
};
export default TytulBezTla;

//~~ _. TytulBezTla
//
