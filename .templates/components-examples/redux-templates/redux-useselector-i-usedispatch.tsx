// // \/ Typescript way - bez Ts byłoby useSelector/ useDispatch
// import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";

// const ExampleComponentZSelectoremIDispatchem = () => {
//   //
//   // useSelector = zapisz wartość konkretneog property, ze stateu konkretneog reducera, z reduxa
//   //
//   const counter = useAppSelector((state) => state.nazwaReduceraPodanaWBudowieStorea.konkretnePropertyZAktualnegoStateu;);
//   //
//   // useDispatch = odpalasz go, podając:
//   //               type
//   //                        (za jego pomoca znajdzie funkcje w redux'sie)
//   //               payload
//   //                        (opcjonalna - wartość, której potrzebuje ta funkcja, np. "payload:1" gdy wywolujemy funkcje dodajaca do czegoś wartośc payloadu)
//   const dispatch = useAppDispatch();

//   dispatch(nazwaABCMojegoSliceuSliceActions.nazwaDEFFunkcjiWTymSlicesie());

//   dispatch(
//     nazwa123MojegoSliceuSliceActions.nazwa456FunkcjiWTymSlicesie({ 1nazwaPropertyPayloadu: 5, 2nazwaPropertyPayloadu :"coś tam" })
//   );
// };
