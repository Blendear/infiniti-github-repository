////
////
////~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
////
////       A.1. parent rozdział nr 1
// //
// //           A.1.1. child rozdział nr 1
// //
////~~ B.  Historyjka druga ...
////

// 1.A. Importujesz componenty       -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

import styles from "src/styles/sass/styles-all.module.scss";
// import aComponent from "... Z COMPONENTOWEGO FOLDERU, czyli folderu obok "pages""
// import bComponent from - I I -

import { isValidElement, useState } from "react";
// A to przyklad componentu - np. podstrony, w którą wchodzimy przez stronę główną najczesciej & wchodiz sie na nia wlasnie slugiem takim,
// Slug to też zgodnie  znazwą folderu, czyli tu byłby głupi slug "podstrona1" - wiadomo, w realu nazwałbyś to sensownie
//
import Image from "next/image";

const wydarzenia = [
  { name: "maniaczenie solo", typ: "N-WI-S-DO", protip: "VIP a nie yolo graj" },
  { name: "drzemusia", typ: "B-WI-S-DO", protip: "timer ustaw" },
  { name: "ruchanie", typ: "T-WA-DU-DO", protip: "bardziej z biodra c:" },
];
const PodstronaJeden = () => {
  {
    /* 
        // 0 - statey
        */
  }
  const [pierwszy, setPierwszy] = useState("");
  //
  const [dwaGrupa, setDwaGrupa] = useState(""); // jaka grupę wydarzne wyrbales
  const [dwaKonkretny, setDwaKonkretny] = useState(""); // jakie konkretne wydarzenie wybrales (string nazwy)
  //
  const [dwaString, setDwaString] = useState(""); // string - zrobiony z template literal zlepku wyborów, np. cs-aa-zt
  //
  const [trzyWynikiWydarzenia, setTrzyWynikiWydarzenia] = useState([{}]); // wyniki zgodnie z krokiem 1 i 2
  //
  const [czteryOstatecznyWynik, setCzteryOstatecznyWynik] = useState({}); // 0osattecnzy wyrbany wynik

  //settery - A || B sposob wyszukiwania
  const handlerPierwszyA = () => {
    setPierwszy("A");
  };
  const handlerPierwszyB = () => {
    setPierwszy("B");
  };
  // setter - inputu on change
  const handlerOnChangeInput = (event) => {
    setDwaString(event.target.value);
  };
  // 2B - 2. POROWNAJ NAZWE Z BAZĄ DANYCH (properu "typ" każdego objecut w tablicy)
  const handlerSzukajWydarzeniaOTypieJakTenString = (event) => {
    setDwaString(event.target.value);

    setTrzyWynikiWydarzenia(
      wydarzenia.filter((wydarzenie) =>
        wydarzenie.typ.includes(dwaString.toUpperCase())
      )
    );
    // //console logi na wszelki
    // console.log(dwaString);
    console.log(trzyWynikiWydarzenia);
  };

  // setter - inputu on change
  const handlerUstawOstatecznieWybraneWydarzenie = (wydFinalne) => {
    console.log(`wybrane wydarzenie : ${wydFinalne.name}`);
    setCzteryOstatecznyWynik(wydFinalne);
    console.log(wydFinalne);
  };

  return (
    <div className={styles["layout__podstrona-1-np-o-nas__cala-strona"]}>
      {/* 
        // 1 A - WYBIERAM KONKRETNE WYDARZENIE
        */}
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      >
        <button onClick={handlerPierwszyA}>
          {" "}
          WYBIERAM KONKRETNE WYDARZENIE{" "}
        </button>
      </div>

      {/* 
        // 1 B - SZUKAM PO TYPACH
        */}
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      >
        <button onClick={handlerPierwszyB}> SZUKAM PO TYPACH</button>
      </div>
      <div> {pierwszy}</div>
      {/* 
        // 2 A - Wydarzneie wybierz
        */}
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      >
        {/* 
        // Cojnditional contnt - if "A" - pokaż menu wyboru reczneog wydarzneia - grupy i konkretnego
         */}
        {pierwszy === "A" ? "wybierz" : ""}
      </div>
      {/* 
        // 2 B - Typy wybierz
        */}
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      >
        {/* 
        // Cojnditional contnt - if "B" - pokaż menu typów
         */}
        {pierwszy === "B" ? "szukaj" : ""}
        {/* 
        // 2B - 1. POBIERZ INPUT & ZAPISZ GO




        */}
        <input onChange={handlerOnChangeInput} value={dwaString}></input>
        <button onClick={handlerSzukajWydarzeniaOTypieJakTenString}>
          Szukaj
        </button>
        {/* 
        // 3. POKAŻ MI TE WYDARZENIA (if they exist) - WSZYSTKIE - w wyniku onClicknietego /\ "mojaArray.filter()"
              I STWÓRZ TYLE KLIKALNYCH BUTTONOW Z ICH NAZWAMI - klik wybiuerze ostateczn wydrazenie do wyswietlenia
        */}
        {trzyWynikiWydarzenia.length >= 1 ? "tak" : "nie"}
        {trzyWynikiWydarzenia.length >= 1 ? "tak" : "nie"}
        <div>
          {trzyWynikiWydarzenia.map((wyd, i) => (
            <button
              key={i}
              onClick={() => {
                handlerUstawOstatecznieWybraneWydarzenie(wyd);
              }}
            >
              {wyd.name}
            </button>
          ))}
        </div>
        {/* 
        // 4. JEDNO wybrane wydrazenie mi pokaz w szczegolach, z rptipami etc.
        */}
        <div>
          {/* <div>
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/x-perymenty/mi-amigo/braindead.png`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={150}
              // layout="responsive"
              // objectFit="cover"
            />
          </div> */}
          <div>nazwa : {czteryOstatecznyWynik.name} </div>
          <div>protip : {czteryOstatecznyWynik.protip}</div>
          <div>________________</div>
        </div>
        {/* 
        // wyświetlenie opcji - tymaczasowow formie tekstu
        */}
        <div>skróty & znaczenie : </div>
        <ul>
          <li> - tym, myślnikiem, oddzielasz litery </li>
          <li> ___ </li>
          <li> 1. energia</li>
          <li> B = braidnead</li>
          <li> N = nakurwianie </li>
          <li> T = tworze</li>
          <li> C = chlone</li>
          <li> ___ </li>
          <li> 2. z kim </li>
          <li> WI = Wilkiem </li>
          <li> WA = Wataha </li>
          <li> ___ </li>
          <li> 3. duporuszność</li>
          <li> S = siedzaco</li>
          <li> DU = duporuch</li>
          <li> ___ </li>
          <li> 4. Gdzie</li>
          <li> DO = W Domku</li>
          <li> DZ = W Dziczy</li>

          <li>___duporuszność</li>
          <div>{dwaString}</div>
        </ul>
      </div>
      {/* 
        // 3 - Wyniki
        */}
      <div
        className={
          styles["layout__podstrona-1-np-o-nas__fragment-1-np-baner-startowy"]
        }
      ></div>
    </div>
  );
};
export default PodstronaJeden;
