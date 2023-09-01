import styles from "src/styles/sass/styles-all.module.scss";
import { BsFillTelephoneFill, BsMessenger } from "react-icons/bs";
import Link from "next/link";
const CallButton = (props) => {
  return (
    //bez "Link", bo href telefoniczny tam nie dziala
    <div>
      <a
        href="tel:+48884848808"
        className={styles["layout__strona-glowna__call-btn"]}
      >
        <div className={styles["layout__strona-glowna__call-btn--svg"]}>
          <BsFillTelephoneFill />
        </div>
      </a>

      <a
        href="https://m.me/182436331865457"
        className={styles["layout__strona-glowna__messenger-btn"]}
      >
        <div className={styles["layout__strona-glowna__messenger-btn--svg"]}>
          <BsMessenger />
        </div>
      </a>
    </div>
  );
};
export default CallButton;
