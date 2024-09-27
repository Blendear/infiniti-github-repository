import styles from "src/styles/sass/styles-all.module.scss";

export const enableBodyOverflow = () => {
  document.body.classList.remove(styles["modal-open"]);
};
