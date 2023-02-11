import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import SVGKlockaFitness from "./svg-klocka-fitness";
import SVGKlockaMedical from "./svg-klocka-medical";

import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../store/redux/store-redux";

const KlocekMenu = (props) => {
  return (
    <div
      className={
        styles["menu-modal__caly-container__klocki--container-klocka-jednego"]
      }
    >
      <button
        // onClick={handlerToggleMenuIsOpen}
        className={styles["menu-modal__caly-container__klocki--fota-btn"]}
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/menu-modal/${props.imagePathEnd}`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={200}
          layout="fill"
          objectFit="contain"
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
    </div>
  );
};
export default KlocekMenu;
