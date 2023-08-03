//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";

const QRReader = ({ propA, propB }) => {
  return (
    <div className={styles["container__css-class-name"]}>
      {/* //       _._. AA */}
      <div className={styles["child__css-class-name"]}>QRReader</div>
      <Link
        href={`/e-trener/lista-cwiczen?nazwa-modalu=${"null"}&id-cwiczenia=${"null"}`}
      >
        <a>do tego linku auto-przeprowadzi QR reader</a>
      </Link>
    </div>
  );
};
export default QRReader;

//~~ _. QR Reader
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
