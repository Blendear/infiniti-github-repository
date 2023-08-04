//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { FaCheck } from "react-icons/fa";

const PotwierdzPrzycisk = ({ children, bgColor }) => {
  return (
    <div className={styles[`container__css-class-name--${bgColor}`]}>
      <div>{children.toUpperCase()}</div>
      <FaCheck />
    </div>
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
