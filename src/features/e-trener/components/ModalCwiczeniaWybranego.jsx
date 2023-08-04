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
  idOtwartegoCwiczenia,
}) => {
  //
  const [cwiczenie, setCwiczenie] = useState("");

  useEffect(() => {
    const znalezioneCwiczenie = cwiczenia.filter((cwiczenie) => {
      return cwiczenie.id === idOtwartegoCwiczenia;
    })[0];
    setCwiczenie(znalezioneCwiczenie);
    console.log("cwiczenie", znalezioneCwiczenie);
  }, []);

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
              <WideoLinkZagniezdzony linkDoWideo={"testowy link do wideo"} />
            ),
            szczegoly: <SzczegolyCwiczenia cwiczenie={cwiczenie} />,
          }[nazwaModalu]
        }
      </div>
      <div>{nazwaModalu}</div>
      <div>{idOtwartegoCwiczenia}</div>
    </div>
  );
};
export default ModalCwiczeniaWybranego;

//~~ _. ModalCwiczeniaWybranego
//
