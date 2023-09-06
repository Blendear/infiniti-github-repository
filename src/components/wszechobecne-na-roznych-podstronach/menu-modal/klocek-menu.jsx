import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import SVGKlockaFitness from "./svg-klocka-fitness";
import SVGKlockaMedical from "./svg-klocka-medical";

import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../store/redux/store-redux";

const KlocekMenu = (props) => {
  return (
    <li
      className={
        styles["menu-modal__caly-container__klocki--container-klocka-jednego"]
      }
    >
      <button
        // onClick={handlerToggleMenuIsOpen}
        className={
          props.typKlockaNormalCzyDlugi === "normal"
            ? styles["menu-modal__caly-container__klocki--fota-btn"]
            : styles["menu-modal__caly-container__klocki--dluuuga-fota-btn"]
        }
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/menu-modal/${props.imagePathEnd}`}
          alt={`Konkretna pozycja menu nawigacji : ${
            props.imagePathEnd.slice(7).split(".")[0]
          }`}
          layout="fill"
          objectFit="contain"
          priority
          loading="eager"
        />
      </button>
      {/* props.linkPath */}

      {/* <div className={styles["menu-modal__caly-container__klocki--svg"]}>
        {props.zDuzejMedicalCzyFitness === "Medical" ? (
          <SVGKlockaMedical />
        ) : (
          <SVGKlockaFitness />
        )}
        
      </div> */}
      {/* <div className={styles["menu-modal__caly-container__klocki--napis"]}>
        {props.napisTresc}
      </div> */}
    </li>
  );
};
export default KlocekMenu;
