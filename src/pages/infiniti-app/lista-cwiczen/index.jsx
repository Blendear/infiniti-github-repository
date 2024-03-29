import styles from "src/styles/sass/styles-all.module.scss";
import { useRouter } from "next/router";
import { MiniaturkaCwiczenia } from "../../../features/e-trener";
import { useState, useEffect, useRef } from "react";
import { TytulBezTla, TytulZTlemKolorowym } from "../../../features/e-trener";
import ModalCwiczeniaWybranego from "../../../features/e-trener/components/ModalCwiczeniaWybranego";
import { cwiczenia } from "../../../features/e-trener";
import Image from "next/image";
import { IoCaretBack } from "react-icons/io5";
import { LoaderIcon } from "../../../components/e-trener/LoaderIcon";

const ListaCwiczen = () => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [filtr, setFiltr] = useState("null");
  const [wartosc, setWartosc] = useState("null");
  const [otwarteCwiczenie, setOtwarteCwiczenie] = useState({});
  // Hardcoded to true, since the basic service is free for every account
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(true);

  const iloscCwiczen = useRef(0);

  const [_, setForceRerender] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.query !== null &&
      (setNazwaModalu(router.query["nazwa-modalu"]),
      setFiltr(router.query["filtr"]),
      setWartosc(router.query["wartosc"]));
  }, [router.query]);

  // Disabled, since the basic service is free for every account
  // useCheckSubscriptionStatus(setPokazInfoNiezasubskrybowanemu);

  useEffect(() => {
    iloscCwiczen.current === -1 && setForceRerender((prev) => !prev);
  }, [iloscCwiczen]);

  const handlebackButton = () => {
    router.push("/infiniti-app?method=qr");
  };

  return (
    pokazInfoNiezasubskrybowanemu && (
      <article className={styles["lista-cwiczen__container"]}>
        <TytulZTlemKolorowym htmlElementType="h1">
          <button onClick={handlebackButton}>
            <IoCaretBack />
          </button>
          <span>WYBIERZ ĆWICZENIE</span>
          <div style={{ color: "transparent" }}>{`X`}</div>
        </TytulZTlemKolorowym>

        <TytulBezTla htmlElementType="h2">
          LUB ZOBACZ GDZIE ĆWICZYĆ I JAKIE MIĘŚNIE BĘDĄ AKTYWNE
        </TytulBezTla>

        {/* //       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń */}
        {(
          <div
            className={styles["lista-cwiczen__lista"]}
            style={
              iloscCwiczen.current === 1 ? { gridTemplateColumns: "1fr" } : {}
            }
          >
            {cwiczenia.map((cwiczenie, index) => {
              //       _._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia

              if (
                (filtr === "maszyna" || filtr === "qr") &&
                wartosc === cwiczenie.idMaszynyUzywanej
              ) {
                iloscCwiczen.current += 1;
                return (
                  <MiniaturkaCwiczenia
                    key={index}
                    cwiczenie={cwiczenie}
                    setNazwaModalu={setNazwaModalu}
                    setOtwarteCwiczenie={setOtwarteCwiczenie}
                  />
                );
              } else if (
                filtr === "gr-miesniowa" &&
                cwiczenie["cwiczone-miesnie"].find(
                  (miesien) => miesien === wartosc
                )
              ) {
                iloscCwiczen.current += 1;
                return (
                  <MiniaturkaCwiczenia
                    key={index}
                    cwiczenie={cwiczenie}
                    setNazwaModalu={setNazwaModalu}
                    setOtwarteCwiczenie={setOtwarteCwiczenie}
                  />
                );
              }
            })}
            {iloscCwiczen.current === 0 && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  position: "relative",
                  width: "min(25rem, 60vw)",
                  aspectRatio: "1/1",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "rgb(239, 239, 239)",
                  filter: "drop-shadow(0px 0px 0.2rem rgb(0,0,0, 0.6))",
                }}
              >
                <Image
                  src="/images/.dedykowane-do-strony-konkretnej/e-trener/informacja/work-in-progress.png"
                  alt={`error while loading image`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  loading="eager"
                />
              </div>
            )}
          </div>
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
        {nazwaModalu !== "null" && (
          <ModalCwiczeniaWybranego
            setNazwaModalu={setNazwaModalu}
            nazwaModalu={nazwaModalu}
            otwarteCwiczenie={otwarteCwiczenie}
          />
        )}
      </article>
    )
  );
};
export default ListaCwiczen;
