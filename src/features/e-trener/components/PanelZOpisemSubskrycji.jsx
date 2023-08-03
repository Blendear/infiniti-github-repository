//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const PanelZOpisemSubskrycji = ({ tekst, fota }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      <div className={styles[""]}>{tekst}</div>
      <div className={styles[""]}>{fota}</div>
    </div>
  );
};
export default PanelZOpisemSubskrycji;

//~~ _. FragmentOpisuSubskrycji
//
