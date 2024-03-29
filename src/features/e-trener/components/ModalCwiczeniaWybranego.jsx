//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import WideoLinkZagniezdzony from "./WideoLinkZagniezdzony";
import SzczegolyCwiczenia from "./SzczegolyCwiczenia";
import cwiczenia from "../data/cwiczenia";
import { useEffect, useState } from "react";
import { Modal, Backdrop } from "../../../components/e-trener";
const ModalCwiczeniaWybranego = ({
  setNazwaModalu,
  nazwaModalu,
  otwarteCwiczenie,
}) => {
  return (
    <>
      <Modal variant="information" hasBackdrop={false}>
        <article className={styles[`modal-cwiczenia-wybranego`]}>
          {
            {
              wideo: (
                <WideoLinkZagniezdzony
                  setNazwaModalu={setNazwaModalu}
                  linkDoWideo={otwarteCwiczenie["link-wideo"]}
                />
              ),
              szczegoly: (
                <SzczegolyCwiczenia
                  setNazwaModalu={setNazwaModalu}
                  cwiczenie={otwarteCwiczenie}
                />
              ),
            }[nazwaModalu]
          }
        </article>
      </Modal>
    </>
  );
};
export default ModalCwiczeniaWybranego;

//~~ _. ModalCwiczeniaWybranego
//
