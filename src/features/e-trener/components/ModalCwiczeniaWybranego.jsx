//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import WideoLinkZagniezdzony from "./WideoLinkZagniezdzony";

const ModalCwiczeniaWybranego = ({ nazwaModalu, idOtwartegoCwiczenia }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      <div>
        {
          {
            wideo: (
              <WideoLinkZagniezdzony linkDoWideo={"testowy link do wideo"} />
            ),
            szczegoly: 1,
          }[nazwaModalu]
        }
      </div>
      <div>{nazwaModalu}</div>
      <div>{idOtwartegoCwiczenia}</div>
    </div>
  );
};
export default ModalCwiczeniaWybranego;

//~~ _. ModalCwiczeniaWybranego
//
