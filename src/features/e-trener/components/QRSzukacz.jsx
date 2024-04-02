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
import { LoaderIcon } from "../../../components/e-trener/LoaderIcon";

const QRSzukacz = () => {
  const router = useRouter();

  const handleScan = (data) => {
    // console.log(data.text);

    if (data !== null) {
      // router.push(`${data.text}`);
      router.push(
        `/infiniti-app/lista-cwiczen?filtr=qr&wartosc=${data.text}&nazwa-modalu=null&id-cwiczenia=null`
      );
    }
  };
  return (
    <section className={styles["strona-glowna__qr-szukacz__container"]}>
      {/* //       _._. AA */}
      <TytulBezTla htmlElementType="label">ZESKANUJ KOD QR MASZYNY</TytulBezTla>
      {(
        <QrReader
          className={styles["strona-glowna__qr-szukacz__kamera"]}
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result);
            }

            if (!!error) {
              // console.info(error);
            }
          }}
          constraints={{
            facingMode: "environment",
          }}
        />
      ) || (
        <div
          style={{
            height: "40vh",
            width: "100%",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <LoaderIcon fontSize="10rem" />
        </div>
      )}
    </section>
  );
};
// NECESSARY to load this page dynamically, because the used QR library wont work server-side (SSR)
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
