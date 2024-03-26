//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";

const AComponent = () => {
  return (
    <button
      style={{ margin: "10rem 0 0 0", width: "15rem", aspectRatio: "3/1" }}
    >
      <Link href="/infiniti-app?method=qr">
        <a>Infiniti App</a>
      </Link>
    </button>
  );
};
export default AComponent;

//~~ _. Tymczasowy plik - pozniej na oryginalnej stronie głównej infiniti będzie button e-trener'a.
//
