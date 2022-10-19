//// TEMPLATE \/\/\/

////  Problemy do rozwiązania poniższymi rozdziałami liczbowymi:
////
////  A.  Śledzę upływ czasu real life
////
////       A.a. ...
// //
// //           1.  Moments.js library
// //
// //               1.1. Zaciągnięcie czasu dla Polski
// //
// //               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a

//// TEMPLATE /\/\/\

import styles from "src/styles/sass/styles-all.module.scss";

import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";

import { useState } from "react";

import { timersSliceActions } from "../../store/redux/store-redux";

import { format, addMinutes } from "date-fns";

const StronaB = () => {
  const [dataZakonczeniaTimera, setDataZakonczeniaTimera] = useState(
    new Date()
  );
  const [stringCzasuKoncowegoTimera, setStringCzasuKoncowegoTimera] =
    useState("");

  const passwordToSetTimer = "cipcia";

  const promptForWprowadzenieMinutHandler = () => {
    let passwordUsera = prompt("Hasło podajta c:");
    if (passwordToSetTimer === passwordUsera) {
      let minutyDoDodania = parseInt(prompt("Za ile minut timer?"));
      const dataTimera = addMinutes(new Date(), minutyDoDodania);
      setDataZakonczeniaTimera(dataTimera);
      console.log(`timer za ${minutyDoDodania} minut`);
      setStringCzasuKoncowegoTimera(format(dataTimera, "HH : mm"));
    }
  };

  return (
    <h1 className={styles["grid--1row-2col"]}>
      <button onClick={promptForWprowadzenieMinutHandler}>
        Wprowadz ilość minut
      </button>

      <div> Timer jest o {stringCzasuKoncowegoTimera}</div>
    </h1>
  );
};
export default StronaB;
