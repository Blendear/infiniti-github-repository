//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import WideoLinkZagniezdzony from "./WideoLinkZagniezdzony";
import SzczegolyCwiczenia from "./SzczegolyCwiczenia";
import { Modal, Backdrop } from "../../../components/e-trener";
import TytulBezTla from "./TytulBezTla";
import Link from "next/link";

const ModalWylogowywania = ({ setIsModalOtwarty }) => {
  //

  return (
    // wylogowywanie__buttony__btn / wylogowywanie__buttony__btn--active
    <>
      <Modal variant="information" hasBackdrop={true}>
        <div className={styles["wylogowywanie__container"]}>
          <h1 className={styles["wylogowywanie__tytul"]}>
            CHCESZ SIĘ WYLOGOWAĆ?
          </h1>
          <div className={styles["wylogowywanie__buttony"]}>
            <button className={styles["wylogowywanie__buttony__btn"]}>
              <Link href="/api/auth/logout">
                <h2>TAK</h2>
              </Link>
            </button>
            <button
              onClick={() => setIsModalOtwarty(false)}
              className={`${styles["wylogowywanie__buttony__btn"]} ${styles["wylogowywanie__buttony__btn--active"]}`}
            >
              <h2>NIE</h2>
            </button>
          </div>
        </div>
      </Modal>
      <Backdrop onClose={() => {}} isStatic={true} variant="black-80-opacity" />
    </>
  );
};
export default ModalWylogowywania;

//~~ _. ModalWylogowywania
//