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
  const [numerMaszyny, setNumerMaszyny] = useState("");

  const handleZmianaNumeru = (e) => {
    let nowaMaszyna;
    e.target.value.length === 9
      ? maszyny.find((maszyna) => {
          nowaMaszyna = maszyna;
          console.log(nowaMaszyna);
          return maszyna["nr-id"] === e.target.value;
        })
        ? (setFotaMaszyny(nowaMaszyna.fota),
          setNumerMaszyny(nowaMaszyna["nr-id"]))
        : setFotaMaszyny("masz0")
      : setFotaMaszyny("");
  };

  return (
    <div className={styles["strona-glowna__nr-id-szukacz__container"]}>
      <TytulBezTla htmlElementType="label">
        WPISZ RĘCZNIE NR MASZYNY
      </TytulBezTla>
      {/* //       _._. Jeśli użytkownik wpisał 9-cyfrową liczbę, która jest numerem ID maszyny, to wyświetl zdjęcie maszyny. Inaczej - wyświetl zdjęcie z napisem "zły numer"       */}
      <input
        className={styles["strona-glowna__nr-id-szukacz__input-field"]}
        onChange={handleZmianaNumeru}
        placeholder="123456789"
        maxLength="9" //hook1 - sprawdz jak dlugi bedzie ten numer i zmien ten max length
      ></input>
      {fotaMaszyny !== "" &&
        (() => (
          <>
            <div
              className={styles["strona-glowna__nr-id-szukacz__fota-maszyny"]} // \/ is a palceholder, before I write code of <
              // style={{
              //   position: "relative",
              //   height: "45rem",
              //   aspectRatio: "1/1.5",
              // }}
            >
              <Image
                // public/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/masz1.png
                src={`/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/${
                  fotaMaszyny !== "masz0" ? fotaMaszyny : "masz0.jpg"
                }`}
                alt={`error while loading image`}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                // quality={50}
              />
            </div>
            {fotaMaszyny !== "masz0" && (
              <PotwierdzPrzycisk
                kolorTla="e-trener-light"
                filtr="maszyna"
                wartosc={numerMaszyny.toString()}
              >
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
