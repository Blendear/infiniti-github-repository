//
// Table of content for this file is written at the bottom
import { FaExclamation } from "react-icons/fa";
import styles from "src/styles/sass/styles-all.module.scss";
import { TytulZTlemKolorowym, TytulBezTla, PanelGrupyMiesniowej } from "..";
import grupyMiesniowe from "../data/grupyMiesniowe"; //hook1 - dlaczego tak dziala, a nie dziala, gdy importuje z "index.js", czyli po przez ".." ?- reszta plikow przeicez dziala takim importem
import Image from "next/image";
import { IoCaretBack } from "react-icons/io5";

const SzczegolyCwiczenia = ({ cwiczenie, setNazwaModalu }) => {
  const handleZamknijModal = () => {
    setNazwaModalu("null");
  };

  return (
    <>
      {/* \/ hook1 - ustaw tytul tak, zeby zawsze mial 3 kolumny, a buttony lub svg niech ustwiaja sie po bokach, a  h1 w srodku */}
      <TytulZTlemKolorowym>
        <button onClick={handleZamknijModal}>
          <IoCaretBack />
        </button>
        <span>{cwiczenie.nazwa} </span>
        <div style={{ color: "transparent" }}>{`X`}</div>
      </TytulZTlemKolorowym>
      <section style={{ display: "grid" }}>
        <TytulBezTla htmlElementType="h2">Mięśnie ćwiczone</TytulBezTla>
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
                fota={
                  grupyMiesniowe.find(({ nazwa }) => nazwa === miesien).fota
                }
              />
            );
          })}
        </ul>
      </section>

      <section>
        <TytulBezTla htmlElementType="h2">{`Lokalizacja maszyny nr ${cwiczenie["idMaszynyUzywanej"]}`}</TytulBezTla>

        {cwiczenie["idMaszynAlternatywnych"] && (
          <div
            className={
              styles[
                "modal-cwiczenia-wybranego__lokalizacja-maszyny__info-o-alternatywnych-maszynach"
              ]
            }
          >
            <TytulBezTla htmlElementType="h2">
              <div>
                <p>
                  <FaExclamation />
                </p>
              </div>

              <p>{`Zajęta? Możesz też użyć:  ${cwiczenie[
                "idMaszynAlternatywnych"
              ].join(", ")}`}</p>
            </TytulBezTla>
          </div>
        )}

        <div
          className={
            styles["modal-cwiczenia-wybranego__lokalizacja-maszyny__fota"]
          }
        >
          {/* hook1 - dodaj DO DOMOWYCH CWICZEN WARIANT zdjęcia "GDZIEKOLWIEK ZECHCESZ! NIE POTRZEBUJESZ DO TEGO CWICZENAI MASZYNY" */}
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/lokalizacje/${cwiczenie["fota-lokalizacji"]}`}
            // public/images/.dedykowane-do-strony-konkretnej/e-trener/lokalizacje/lok24.png
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={100}
          />
        </div>
      </section>
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
