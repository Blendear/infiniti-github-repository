import SVGOtoczkaNazwy from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";

const TytulPodstronyFitness = (props) => {
  return (
    <h1 className={styles["tytul-podstrony__caly-container"]}>
      <SVGOtoczkaNazwy
        className={styles["tytul-podstrony__caly-container--svg"]}
        mojKolor="#ffffff"
      />

      <span
        className={`${styles["tytul-podstrony__caly-container--napis--fitness-wariant"]} ${styles["tytul-podstrony__caly-container--napis"]}`}
      >{`${props.nazwaPodstrony}`}</span>
    </h1>
  );
};
export default TytulPodstronyFitness;
