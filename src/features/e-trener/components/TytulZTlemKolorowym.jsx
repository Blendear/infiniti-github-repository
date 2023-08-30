//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulZTlemKolorowym = ({ children }) => {
  return (
    <header className={styles["tytul__container"]}>
      <h1 className={styles["tytul--z-tlem-kolorowym"]}>{children}</h1>
    </header>
  );
};
export default TytulZTlemKolorowym;

//~~ _. TytulZTlemKolorowym

//
