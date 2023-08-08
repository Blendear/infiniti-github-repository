//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const PotwierdzPrzycisk = ({ children, kolorTla, filtr, wartosc }) => {
  return (
    <button className={styles[`btn-potwierdzajacy__container--${kolorTla}`]}>
      {/* filtr = maszyna || gr-miesniowa   &   wartosc = number idMaszyny || string "nazwa" gr. miesniowej */}
      <Link
        href={`/e-trener/lista-cwiczen?filtr=${filtr}&wartosc=${wartosc}&nazwa-modalu=null&id-cwiczenia=null`}
      >
        <a>
          <div>{children.toUpperCase()}</div>
          <FaCheck />
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
