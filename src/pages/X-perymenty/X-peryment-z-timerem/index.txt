// //// TEMPLATE \/\/\/

// ////  Problemy do rozwiązania poniższymi rozdziałami liczbowymi:
// ////
// ////  A.  Śledzę upływ czasu real life
// ////
// ////       A.a. ...
// // //
// // //           1.  Moments.js library
// // //
// // //               1.1. Zaciągnięcie czasu dla Polski
// // //
// // //               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a

// //// TEMPLATE /\/\/\

// import styles from "src/styles/sass/styles-all.module.scss";

// import { useState } from "react";

// import { compareAsc, format, addMinutes } from "date-fns";

// import { useQuery } from "react-query";

// import ReactHowler from "react-howler";

// import FirebasePostRequest from "../../components/firebase-post-request";
// import FirebaseGetRequest from "../../components/firebase-get-request";

// const StronaB = () => {
//   const [dataZakonczeniaTimera, setDataZakonczeniaTimera] = useState(
//     new Date()
//   );
//   const [stringCzasuKoncowegoTimera, setStringCzasuKoncowegoTimera] =
//     useState("");

//   const passwordToSetTimer = "cipcia";

//   const promptForWprowadzenieMinutHandler = () => {
//     let passwordUsera = prompt("Hasło podajta c:");
//     if (passwordToSetTimer === passwordUsera) {
//       let minutyDoDodania = parseInt(prompt("Za ile minut timer?"));
//       const dataTimera = addMinutes(new Date(), minutyDoDodania);
//       setDataZakonczeniaTimera(dataTimera);
//       console.log(`timer za ${minutyDoDodania} minut`);
//       setStringCzasuKoncowegoTimera(format(dataTimera, "HH : mm"));
//     }
//   };

//   return (
//     <h1 className={styles["grid--1row-2col"]}>
//       <button onClick={promptForWprowadzenieMinutHandler}>
//         Wprowadz ilość minut
//       </button>

//       <FirebasePostRequest
//         podanaDataZakonczeniaTimera={stringCzasuKoncowegoTimera}
//       ></FirebasePostRequest>
//       <FirebaseGetRequest></FirebaseGetRequest>
//       {/* <button onClick={addObjectToDatabaseHandler}></button> */}
//     </h1>
//   );
// };
// export default StronaB;

// // zaciągniju GET z Database
// // zapisz w redux
// // w componentcie zaciagnij z reduxa
