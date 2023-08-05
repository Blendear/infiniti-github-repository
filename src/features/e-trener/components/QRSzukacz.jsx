//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import TytulBezTla from "./TytulBezTla";
import { useState } from "react";

import { QrReader } from "react-qr-reader";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const QRSzukacz = () => {
  const [result, setResult] = useState("No result");
  const router = useRouter();

  const handleScan = (data) => {
    setResult(data);
    console.log(data);

    if (data !== null) {
      router.push(`${data.text}`);
    }
  };
  return (
    <div className={styles["container__css-class-name"]}>
      {/* //       _._. AA */}
      <TytulBezTla>ZESKANUJ KOD QR MASZYNY</TytulBezTla>
      {/* <Link
        href={`/e-trener/lista-cwiczen?nazwa-modalu=${"null"}&id-cwiczenia=${"null"}`}
      >
        <a>do tego linku auto-przeprowadzi QR reader</a>
      </Link> */}

      <div>
        <p>{result.text ? result.text : "Zeskanuj aparatem kod QR maszyny"}</p>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          constraints={{
            facingMode: "environment",
          }}
        />
      </div>
    </div>
  );
};
// trap1 - NECESSARY to load this page dynamically, because the used QR library wont work server-side (SSR)
export default dynamic(() => Promise.resolve(QRSzukacz), {
  ssr: false,
});

// docs - https://github.com/JodusNodus/react-qr-reader

//~~ _. QR Reader
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
