//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const TytulBezTla = ({ children }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      <div
        style={{ backgroundColor: "lightGrey" }}
        // className={styles["content-container"]}
      >
        {children}
      </div>
    </div>
  );
};
export default TytulBezTla;

//~~ _. TytulBezTla
//
