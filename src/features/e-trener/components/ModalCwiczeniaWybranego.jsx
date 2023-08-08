//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import WideoLinkZagniezdzony from "./WideoLinkZagniezdzony";
import SzczegolyCwiczenia from "./SzczegolyCwiczenia";
import cwiczenia from "../data/cwiczenia";
import { useEffect, useState } from "react";

const ModalCwiczeniaWybranego = ({
  setNazwaModalu,
  nazwaModalu,
  otwarteCwiczenie,
}) => {
  //

  const handleZamknijModal = () => {
    setNazwaModalu("null");
  };

  return (
    <div className={styles["container__css-class-name"]}>
      <button onClick={handleZamknijModal}>X</button>
      <div>
        {
          {
            wideo: (
              <WideoLinkZagniezdzony linkDoWideo={"testowa-nazwa-linku"} />
            ),
            szczegoly: <SzczegolyCwiczenia cwiczenie={otwarteCwiczenie} />,
          }[nazwaModalu]
        }
      </div>
    </div>
  );
};
export default ModalCwiczeniaWybranego;

//~~ _. ModalCwiczeniaWybranego
//
