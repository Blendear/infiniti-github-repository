//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulZTlemKolorowym = ({ children }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      <div
        style={{ backgroundColor: "blue", color: "white" }}
        // className={styles["content-container"]}
      >
        {children}
      </div>
    </div>
  );
};
export default TytulZTlemKolorowym;

//~~ _. TytulZTlemKolorowym

//
