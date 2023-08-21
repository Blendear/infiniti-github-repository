//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { TytulZTlemKolorowym, TytulBezTla, PanelGrupyMiesniowej } from "..";
import grupyMiesniowe from "../data/grupyMiesniowe"; //hook1 - dlaczego tak dziala, a nie dziala, gdy importuje z "index.js", czyli po przez ".." ?- reszta plikow przeicez dziala takim importem
import Image from "next/image";

const SzczegolyCwiczenia = ({ cwiczenie, setNazwaModalu }) => {
  const handleZamknijModal = () => {
    setNazwaModalu("null");
  };

  return (
    <>
      {/* \/ hook1 - ustaw tytul tak, zeby zawsze mial 3 kolumny, a buttony lub svg niech ustwiaja sie po bokach, a  h1 w srodku */}
      <TytulZTlemKolorowym>
        <div style={{ color: "transparent" }}>{`X`}</div>
        <div>{cwiczenie.nazwa} </div>{" "}
        <button onClick={handleZamknijModal}>X</button>
      </TytulZTlemKolorowym>
      <TytulBezTla>MIĘŚNIE ĆWICZONE</TytulBezTla>
      <ul
        className={
          styles["modal-cwiczenia-wybranego__miesnie-cwiczone__lista-miesni"]
        }
      >
        {cwiczenie["cwiczone-miesnie"].map((miesien, i) => {
          return (
            <PanelGrupyMiesniowej
              key={i}
              grupaMiesniowa={miesien}
              fota={grupyMiesniowe.find(({ nazwa }) => nazwa === miesien).fota}
            />
          );
        })}
      </ul>
      <TytulBezTla>LOKALIZACJA MASZYNY</TytulBezTla>
      <div
        className={
          styles["modal-cwiczenia-wybranego__lokalizacja-maszyny__fota"]
        }
      >
        {/* hook1 - dodaj DO DOMOWYCH CWICZEN WARIANT zdjęcia "GDZIEKOLWIEK ZECHCESZ! NIE POTRZEBUJESZ DO TEGO CWICZENAI MASZYNY" */}
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/e-trener/lokalizacje/${cwiczenie["fota-lokalizacji"]}`}
          alt={`error while loading image`}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          quality={100}
        />
      </div>
    </>
  );
};
export default SzczegolyCwiczenia;

//~~ _. SzczegolyCwiczenia
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
