//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulSamozmieniajacySie = ({ napisy }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      {napisy.map((tekst, index) => {
        return <div key={index}>{tekst}</div>;
      })}
    </div>
  );
};
export default TytulSamozmieniajacySie;

//~~ _. TytulSamozmieniajacySie
//
