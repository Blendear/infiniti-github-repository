//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const PotwierdzPrzycisk = ({ children, kolorTla, filtr, wartosc }) => {
  return (
    <button
      style={
        kolorTla === "e-trener"
          ? {
              gridRow: "2",
              gridColumn: "1",
              alignSelf: "end",
              transform: "translateY(-25%)",
            }
          : {}
      }
      className={`${styles[`btn-potwierdz__container`]} ${
        styles[`btn-potwierdz__container--${kolorTla}`]
      }`}
    >
      {/* filtr = maszyna || gr-miesniowa   &   wartosc = number idMaszyny || string "nazwa" gr. miesniowej */}
      <Link
        href={`/e-trener/lista-cwiczen?filtr=${filtr}&wartosc=${wartosc}&nazwa-modalu=null&id-cwiczenia=null`}
      >
        <a
          style={
            kolorTla === "e-trener"
              ? { gridTemplateColumns: "0.6fr 5fr 0.6fr" }
              : {}
          }
        >
          {kolorTla === "e-trener" && <div></div>}
          <span>
            {kolorTla === "e-trener" ? (
              <div>
                WYBIERAM:
                <br />
              </div>
            ) : (
              ""
            )}
            {children.toUpperCase()}
          </span>
          <FaCheck
            style={
              kolorTla === "e-trener" ? { fontSize: "min(1.5rem, 7vw)" } : {}
            }
          />
        </a>
      </Link>
    </button>
  );
};
export default PotwierdzPrzycisk;

//~~ _. PotwierdzPrzycisk
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
