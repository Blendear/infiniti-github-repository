import styles from "src/styles/sass/styles-all.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoaderIcon = ({ fontSize }) => {
  return (
    <div
      style={{
        color: "#4ec5d1",
        height: "100%",
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        fontSize: fontSize,
      }}
    >
      <AiOutlineLoading3Quarters className={styles["loader-icon__container"]} />
    </div>
  );
};
