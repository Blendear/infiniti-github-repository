//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const PanelGrupyMiesniowej = ({ grupaMiesniowa, key }) => {
  return (
    <li key={key} className={styles["container__css-class-name"]}>
      {/* //       _._. AA */}
      <div className={styles[""]}>[Fota]</div>
      <div className={styles[""]}>{grupaMiesniowa}</div>
    </li>
  );
};
export default PanelGrupyMiesniowej;

//~~ _. PanelGrupyMiesniowej
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
