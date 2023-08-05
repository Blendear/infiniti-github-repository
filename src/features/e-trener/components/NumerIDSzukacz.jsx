//
// Table of content for this file is written at the bottom
//
import { useState } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
import { maszyny } from "..";
import TytulBezTla from "./TytulBezTla";
import PotwierdzPrzycisk from "./PotwierdzPrzycisk";
import Image from "next/image";

const NumerIDSzukacz = () => {
  const [fotaMaszyny, setFotaMaszyny] = useState("");

  const handleZmianaNumeru = (e) => {
    let nowaMaszyna;
    e.target.value.length === 9
      ? maszyny.find((maszyna) => {
          nowaMaszyna = maszyna;
          console.log(nowaMaszyna);
          return maszyna["nr-id"] === e.target.value;
        })
        ? setFotaMaszyny(nowaMaszyna.fota)
        : setFotaMaszyny("zly-numer")
      : setFotaMaszyny("");
  };

  return (
    <div className={styles["container__css-class-name"]}>
      <TytulBezTla>WPISZ RĘCZNIE NR MASZYNY</TytulBezTla>
      {/* //       _._. Jeśli użytkownik wpisał 9-cyfrową liczbę, która jest numerem ID maszyny, to wyświetl zdjęcie maszyny. Inaczej - wyświetl zdjęcie z napisem "zły numer"       */}
      <input
        onChange={handleZmianaNumeru}
        placeholder="123456789"
        maxLength="9" //hook1 - sprawdz jak dlugi bedzie ten numer i zmien ten max length
      ></input>
      {fotaMaszyny !== "" &&
        (() => (
          <>
            <div
              // className={styles["fota-maszyny-CONTAINER"]}   // \/ is a palceholder, before I write code of <
              style={{
                position: "relative",
                height: "45rem",
                aspectRatio: "1/1.5",
              }}
            >
              <Image
                // public/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/masz1.png
                src={`/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/${
                  fotaMaszyny !== "zly-numer" ? fotaMaszyny : "zly-numer.png"
                }`}
                alt={`error while loading image`}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                // quality={50}
              />
            </div>
            {fotaMaszyny !== "zly-numer" && (
              <PotwierdzPrzycisk bgColor="green">
                {"TAK, TO TA MASZYNA"}
              </PotwierdzPrzycisk>
            )}
          </>
        ))()}
    </div>
  );
};
export default NumerIDSzukacz;

//~~ _. NumerIDSzukacz
//
//       _._. Jeśli użytkownik wpisał 9-cyfrową liczbę, która jest numerem ID maszyny, to wyświetl zdjęcie maszyny. Inaczej - wyświetl zdjęcie z napisem "zły numer"
//
