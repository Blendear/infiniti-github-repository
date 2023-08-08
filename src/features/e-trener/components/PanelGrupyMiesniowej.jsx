//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const PanelGrupyMiesniowej = ({ grupaMiesniowa, fota, key }) => {
  return (
    <li
      key={key}
      // className={styles["container__css-class-name"]}
      style={{
        display: "grid",
        gridAutoFlow: "column",
        width: "15rem",
        columnGap: "1rem",
      }}
    >
      {/* //       _._. AA */}
      <div
        // className={styles["image-styling"]}   // \/ is a palceholder, before I write code of <
        style={{ position: "relative", height: "4rem", width: "4rem" }}
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/e-trener/ikony-miesni/${fota}`}
          alt={`error while loading image`}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          quality={1}
        />
      </div>

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
