//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulBezTla = ({ children, htmlElementType }) => {
  return (
    <div className={styles["tytul__container"]}>
      {
        {
          label: <label className={styles["tytul--bez-tla"]}>{children}</label>,
          h1: <h1 className={styles["tytul--bez-tla"]}>{children}</h1>,
          h2: <h2 className={styles["tytul--bez-tla"]}>{children}</h2>,
        }[htmlElementType]
      }
    </div>
  );
};
export default TytulBezTla;

//~~ _. TytulBezTla
//
