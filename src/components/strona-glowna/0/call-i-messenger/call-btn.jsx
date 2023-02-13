import styles from "src/styles/sass/styles-all.module.scss";
import { BsTelephone } from "react-icons/bs";

const CallButton = (props) => {
  return (
    //bez "Link", bo href telefoniczny tam nie dziala
    <a
      href="tel:+48884848808"
      className={styles["layout__strona-glowna__call-btn"]}
    >
      <div className={styles["layout__strona-glowna__call-btn--svg"]}>
        <BsTelephone />
      </div>
    </a>
  );
};
export default CallButton;
