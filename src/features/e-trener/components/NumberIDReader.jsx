//
// Table of content for this file is written at the bottom
//
import { useState } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
import { maszyny } from "..";

const NumberIDReader = () => {
  const [fotaMaszyny, setFotaMaszyny] = useState("");

  const handleInputChange = (e) => {
    e.target.value.length === 9
      ? maszyny.find((maszyna) => {
          return maszyna["nr-id"] === e.target.value;
        })
        ? setFotaMaszyny("fota maszyny aaa")
        : setFotaMaszyny("zly-numer")
      : setFotaMaszyny("");
  };

  return (
    <div className={styles["container__css-class-name"]}>
      <div className={styles[""]}>WPISZ RĘCZNIE NR MASZYNY</div>
      {/* //       _._. Jeśli użytkownik wpisał 9-cyfrową liczbę, która jest numerem ID maszyny, to wyświetl zdjęcie maszyny. Inaczej - wyświetl zdjęcie z napisem "zły numer"       */}
      <input
        onChange={handleInputChange}
        placeholder="123456789"
        maxLength="9" //hook1 - sprawdz jak dlugi bedzie ten numer i zmien ten max length
      ></input>
      {fotaMaszyny !== "" &&
        (() => (
          <>
            <div className={styles[""]}>{fotaMaszyny}</div>
            {fotaMaszyny !== "zly-numer" && (
              <>
                <div>CZY TO TA MASZYNA?</div>
                <button className={styles[""]}>TAK \/</button>
              </>
            )}
          </>
        ))()}
    </div>
  );
};
export default NumberIDReader;

//~~ _. NumberIDReader
//
//       _._. Jeśli użytkownik wpisał 9-cyfrową liczbę, która jest numerem ID maszyny, to wyświetl zdjęcie maszyny. Inaczej - wyświetl zdjęcie z napisem "zły numer"
//
