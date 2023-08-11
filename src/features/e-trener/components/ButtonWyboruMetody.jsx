//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import {
  TbSquareNumber2,
  TbSquareNumber4,
  TbSquareNumber7,
} from "react-icons/tb";
import { PiNumberSquareTwoLight } from "react-icons/pi";
import { BsQrCodeScan } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";

const ButtonWyboruMetody = ({ activeButton, metoda, setActiveButton }) => {
  return (
    <button
      className={`${styles["wybor-metody__buttony__btn"]} ${
        activeButton === metoda && styles["wybor-metody__buttony__btn--active"]
      } }`}
      onClick={() => {
        setActiveButton(metoda);
      }}
    >
      <Link href={`/e-trener?method=${metoda}`}>
        <a>
          {
            {
              qr: (
                <>
                  {/*  */}
                  <div
                    className={
                      styles["wybor-metody__buttony__btn__icon--single"]
                    }
                  >
                    <BsQrCodeScan />
                  </div>
                  <h3>{`KOD QR MASZYNY`}</h3>
                </>
              ),
              nr: (
                <>
                  <div
                    className={
                      styles["wybor-metody__buttony__btn__icon--tripple"]
                    }
                  >
                    <TbSquareNumber2 /> <TbSquareNumber4 /> <TbSquareNumber7 />
                  </div>
                  <h3>{`NUMER MASZYNY`}</h3>
                </>
              ),
              miesien: (
                <>
                  <div
                    className={
                      styles["wybor-metody__buttony__btn__icon--single"]
                    }
                  >
                    <GiBiceps />
                  </div>
                  <h3>{`GRUPA MIĘŚNIOWA`}</h3>
                </>
              ),
            }[metoda]
          }
        </a>
      </Link>
    </button>
  );
};
export default ButtonWyboruMetody;

//~~ _. ButtonWyboruMetody
//
