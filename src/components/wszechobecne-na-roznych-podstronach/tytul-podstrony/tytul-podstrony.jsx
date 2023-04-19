import SVGOtoczkaNazwy from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";

const TytulPodstrony = (props) => {
  return (
    <div className={styles["tytul-podstrony__caly-container"]}>
      <SVGOtoczkaNazwy
        className={styles["tytul-podstrony__caly-container--svg"]}
        mojKolor="#ffffff"
      />

      <div
        className={styles["tytul-podstrony__caly-container--napis"]}
      >{`${props.nazwaPodstrony}`}</div>
    </div>
  );
};
export default TytulPodstrony;
