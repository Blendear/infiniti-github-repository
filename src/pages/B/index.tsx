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

import { timersSliceActions } from "../../store/redux/store-redux";

const StronaB = () => {
  const aktualnyTimer = useAppSelector(
    (state) => state.timersReducer.czasNaliczonyOnStartuTimera
  );

  const dispatch = useAppDispatch();

  const startTimerHandler = () => {
    dispatch(
      timersSliceActions.rozpocznijTimerODlugosciX({ dlugoscTimera: 50 })
    );
  };

  return (
    // sss - wyświetl wartosc aktualnego timera
    <h1 className={styles["grid--1row-2col"]}>
      <button onClick={startTimerHandler}> Start timera</button>
      <div> {`Czas timera w sekundach : ${aktualnyTimer}`}</div>
      {/* <div>tes 1</div> <div> test 2</div> */}
    </h1>
  );
};
export default StronaB;
