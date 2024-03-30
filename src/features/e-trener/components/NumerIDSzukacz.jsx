import { useState } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
import { maszyny } from "..";
import TytulBezTla from "./TytulBezTla";
import PotwierdzPrzycisk from "./PotwierdzPrzycisk";
import Image from "next/image";

const NumerIDSzukacz = () => {
  const [fotaMaszyny, setFotaMaszyny] = useState("");
  const [numerMaszyny, setNumerMaszyny] = useState("");
  const [
    najnowszaMaszynaJestJuZZaladowana,
    setNajnowszaMaszynaJestJuZZaladowana,
  ] = useState(false);

  const handleZmianaNumeru = (e) => {
    let nowaMaszyna;
    setFotaMaszyny("");

    // The image opacity will be "0" until this becomes true,so that
    // writing "21" after "2" wont show the machine with id "2" before
    // the machine "21" loads
    setNajnowszaMaszynaJestJuZZaladowana(false);

    e.target.value.length > 0
      ? maszyny.find((maszyna) => {
          nowaMaszyna = maszyna;

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
        WPISZ RĘCZNIE NR MASZYNY I ZATWIERDŹ
      </TytulBezTla>
      <input
        type="number"
        className={styles["strona-glowna__nr-id-szukacz__input-field"]}
        onChange={handleZmianaNumeru}
        placeholder="numer"
        maxLength="2"
      ></input>
      {fotaMaszyny !== "" &&
        (() => (
          <>
            <div
              className={styles["strona-glowna__nr-id-szukacz__fota-maszyny"]} // \/ is a palceholder, before I write code of <
            >
              <Image
                style={najnowszaMaszynaJestJuZZaladowana ? {} : { opacity: 0 }}
                onLoadingComplete={() => {
                  setNajnowszaMaszynaJestJuZZaladowana(true);
                }}
                src={`/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/${
                  fotaMaszyny !== "masz0" ? fotaMaszyny : "masz0.jpg"
                }`}
                placeholder="/images/.dedykowane-do-strony-konkretnej/e-trener/maszyny/masz-loader.jpg"
                alt={`error while loading image`}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
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
