// //
// //  0. Import pod Animację RTG
// //
// //  1. Tworzę <Transition> component, umożliwiający animacje
// //
// //  2. Properties <Transition> component'a wypełniam, wedle potrzeby (tutaj rozpisałem wszystkie dla jaj)
// //
// //      2.1. "in" proeprty albo ręcznie wpisuję, albo uzależniam od czegoś, np. clicku buttona (które settuje true/false tego property)
// //
// //  3. JSX'ową zawartość (to co zobaczymy) <Transition> component'a tworzę
// //
// //      3.1. Settowanie aktualnego stanu animacji (4.1.) - żeby robić X, gdy stan równa się Y
// //
// //      3.2. Visual buduję & Podaję mu styl, który będzie się dynamicznie zmieniał, w animowany sposób (4.)
// //
// //  4. Udynamiczniam string classy & CSS classę tym stringiem wywołuję
// //
// //      4.1. Zapisuję w "useState" aktualny state animacji
// //
// //      4.2. Tworzę string, złożonych z dynamicznie przypisywanych elementów, zależnie od state'u animacji (4.1.)
// //
// //      4.3. Wywołuję dynamiczna classę - W "className", w celu znalezienie konkretnych stylów z moich CSSowskich "styles", robie array zaciągania styli. Albo piszę odręcznie, albo poiner'uję do dynamicznego stringa (4.2.). Na koniec daje ".join(" ")", żeby połączyć te wszystkie style (O ILE TEGO WŁAŚNIE CHCĘ)

// //
// //  0. Import pod Animację RTG
// //
// import { Transition } from "react-transition-group";
// import styles from "src/styles/sass/styles-all.module.scss";
// import { useState } from "react";

// const StronaZAnimacjaRTG = () => {
//   //
//   //      2.1. "in" proeprty albo ręcznie wpisuję, albo uzależniam od czegoś, np. clicku buttona (które settuje true/false tego property)
//   //
//   const [inProp, setInProp] = useState(false);
//   //
//   //      4.1. Zapisuję w "useState" aktualny state animacji
//   //
//   const [stateAnimacji, setStateAnimacji] = useState("");
//   //
//   //  4. Udynamiczniam string classy & CSS classę tym stringiem wywołuję
//   //
//   //      4.2. Tworzę string, złożonych z dynamicznie przypisywanych elementów, zależnie od state'u animacji (4.1.)
//   //
//   let dodatkoweCSSClasses: Array<String> = [
//     stateAnimacji === "exited" ? "box--violet" : "",
//     stateAnimacji === "entering" ? "box--animated" : "",
//   ];

//   return (
//     <div>
//       {/* 1. Tworzę <Transition> component, umożliwiający animacje*/}
//       <Transition
//         //
//         // in = Czy animacja ma wystartować. Gdy "true", odpali się entering i entered.
//         //      Gdy stanie sie "false" - exiting oi exited
//         in={inProp}
//         //
//         // ile zajmie przejście KAŻDEJ KOLEJNEJ TRANSITION, czyli każej spośród:
//         // ENTERING -> ENTERED -> EXITING -> EXITED
//         // np. transition 300 = 1200 minie, zanimm przez wszystkie przejdzie
//         // timeout={500}
//         timeout={2000}
//         // alternatywnie : timeout={ {appear: 280, enter:200, exit:130} }
//         // appear = taki delay "kiedy zacznę entering"? No idea hook1

//         // if te dwa propsy istnieja, to nasz "<Transition>" JSX zostanie:
//         //      )  dodany (pojawi się div) do DOM'u dopiero, gdy "in" property stanie się "true"
//         //      )  usunięty (zniknie div dosłownie) z DOM'u już wtedy, gdy "in" property stanie sie "false"
//         // mountOnEnter
//         // unmountOnExit

//         // funkcje odpalane w 6 konkretnych momentach animacji.
//         // protip2 - dobre np. funkcjonalnośc x / animacja x ma sie odpalić w bardzo konkretnym etapie pierwszej
//         onEnter={() => {
//           console.log("Gdy aktywuję animację (by setting in prop to true)");
//         }}
//         onEntering={() => {
//           console.log("Moment od zaczęcia wejścia do zakończenia wejścia");
//         }}
//         onEntered={() => {
//           console.log("Moment wejścia");
//         }}
//         onExit={() => {
//           console.log("Gdy wyłączę animację (by setting in prop to false)");
//         }}
//         onExiting={() => {
//           console.log("Moment od zaczęcia wyjścia do zakończenia wyjścia");
//         }}
//         onExited={() => {
//           console.log("Moment wyjścia");
//         }}
//       >
//         {/* 3. JSX'ową zawartość (to co zobaczymy) <Transition> component'a tworzę */}
//         {/* state = aktualny state aktywnej animacji (Entering, entered, exiting, exited) - BEZ "onEnter" i "onExit" oczywiście. */}
//         {(state: string) => {
//           //
//           // 3.1. Settowanie aktualnego stanu animacji (4.1.) - żeby robić X, gdy stan równa się Y
//           //
//           setStateAnimacji(state);
//           return (
//             //
//             // 3.2. Visual buduję & Podaję mu styl, który będzie się dynamicznie zmieniał, w animowany sposób (4.)
//             //
//             <div>
//               <p
//                 //
//                 // 4.3. Wywołuję dynamiczna classę - W "className", w celu znalezienie konkretnych stylów z moich CSSowskich "styles", robie array zaciągania styli. Albo piszę odręcznie, albo poiner'uję do dynamicznego stringa (4.2.). Na koniec daje ".join(" ")", żeby połączyć te wszystkie style (O ILE TEGO WŁAŚNIE CHCĘ)
//                 //
//                 className={[
//                   styles["box"],
//                   styles[dodatkoweCSSClasses.join("")],
//                 ].join(" ")}
//               ></p>
//               <p>
//                 Złączona nazwa classów :{" "}
//                 {[styles["box"], styles[dodatkoweCSSClasses.join("")]].join(
//                   " "
//                 )}
//               </p>
//               <p>Aktualny state animacji : {state} </p>
//             </div>
//           );
//         }}
//       </Transition>
//       <button onClick={() => setInProp(true)}>Click to Enter</button>
//       <button onClick={() => setInProp(false)}>Click to Exit</button>
//     </div>
//   );
// };
// export default StronaZAnimacjaRTG;
