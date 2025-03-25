import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { LoaderIcon } from "../../../components/e-trener/LoaderIcon";
import { Scanner } from "@yudiel/react-qr-scanner";

const QRSzukacz = () => {
  const router = useRouter();

  const handleScan = (data) => {
    if (data && data[0] && data[0].rawValue) {
      const qrCodeValue = data[0].rawValue;
      router.push(
        `/infiniti-app/lista-cwiczen?filtr=qr&wartosc=${qrCodeValue}&nazwa-modalu=null&id-cwiczenia=null`
      );
    }
  };

  return (
    <section className={styles["strona-glowna__qr-szukacz__container"]}>
      <TytulBezTla htmlElementType="label">ZESKANUJ KOD QR MASZYNY</TytulBezTla>
      {(
        <Scanner
          onScan={(result) => {
            console.log(result), handleScan(result);
          }}
          classNames={{
            container: styles["strona-glowna__qr-szukacz__kamera"],
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
