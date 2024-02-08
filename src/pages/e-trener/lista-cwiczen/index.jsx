//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { useRouter } from "next/router";
import { MiniaturkaCwiczenia } from "../../../features/e-trener";
import { useState, useEffect, useRef } from "react";
import { TytulBezTla, TytulZTlemKolorowym } from "../../../features/e-trener";
import ModalCwiczeniaWybranego from "../../../features/e-trener/components/ModalCwiczeniaWybranego";
import { cwiczenia } from "../../../features/e-trener";
import stripeGetUserInfo from "../../../utils/stripeGetUserInfo";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const ListaCwiczen = () => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [filtr, setFiltr] = useState("null");
  const [wartosc, setWartosc] = useState("null");
  const [otwarteCwiczenie, setOtwarteCwiczenie] = useState({});
  const { user, isLoading } = useUser();
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(false);
  const iloscCwiczen = useRef(0);
  const [forceRerender, setForceRerender] = useState(false);

  const router = useRouter();
  console.log("rerender");
  useEffect(() => {
    router.query !== null &&
      (setNazwaModalu(router.query["nazwa-modalu"]),
      setFiltr(router.query["filtr"]),
      setWartosc(router.query["wartosc"]));
  }, [router.query]);
  //HOOK2 - \/ Sprawdzanie subskrypocji robmy reduxem, a tylko raz sprawdzajmy, gdy zaciagnijecie stanu zalogowania z reduxa nie istneije? - PRZERÓB tego use effecta  w osobna funkcje || reduxem zalstw ta kwestie - bo powtarzam ten kod juz 3ci raz
  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      const subInfo = await stripeGetUserInfo(user.email);
      subInfo.data.doesASubWithThisIDExist
        ? setPokazInfoNiezasubskrybowanemu(true)
        : router.push("/e-trener/informacje-o-subskrypcji");
    };
    user && checkSubscriptionStatus();
  }, [user]);

  useEffect(() => {
    console.log("useeffect");
    console.log("iloscCwiczen.current", iloscCwiczen.current === -1);
    iloscCwiczen.current === -1 && setForceRerender((prev) => !prev);
  }, [iloscCwiczen]);

  return (
    pokazInfoNiezasubskrybowanemu && (
      <article className={styles["lista-cwiczen__container"]}>
        <TytulZTlemKolorowym htmlElementType="h1">
          WYBIERZ ĆWICZENIE I ZACZYNAJMY!
        </TytulZTlemKolorowym>
        <TytulBezTla htmlElementType="h2">
          {/* LUB KLIKNIJ “i”, ABY ZOBACZYĆ LOKALIZACJĘ MASZYNY ORAZ “ĆWICZONE
          MIĘŚNIE” */}
          LUB ZOBACZ GDZIE ĆWICZYĆ I JAKIE MIĘŚNIE BĘDĄ AKTYWNE
        </TytulBezTla>
        {/* //       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń */}
        <div className={styles["lista-cwiczen__lista"]}>
          {cwiczenia.map((cwiczenie, index) => {
            //       _._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia

            if (
              filtr === "maszyna" &&
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
            } else {
              cwiczenia.length - 1 === index &&
                iloscCwiczen.current === 0 &&
                ((iloscCwiczen.current = -1),
                console.log("iloscCwiczen", iloscCwiczen.current));
            }
          })}
          {iloscCwiczen.current === -1 && (
            <div
              style={{
                gridColumn: "1 / -1",
                position: "relative",
                width: "min(25rem, 60vw)",
                aspectRatio: "1/1",
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundColor: "rgb(239, 239, 239)",
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
        {nazwaModalu !== "null" && (
          <ModalCwiczeniaWybranego
            setNazwaModalu={setNazwaModalu}
            nazwaModalu={nazwaModalu}
            otwarteCwiczenie={otwarteCwiczenie}
          />
        )}
        <div style={{ height: "5rem", color: "transparent" }}>_</div>
      </article>
    )
  );
};
export default ListaCwiczen;

//~~ _. ListaCwiczen
//
//       _._. <TytulZTlemKolorowym> & <TytulBezTla>
//
//       _._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia
//
//       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń
//
//            _._._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia
//
//       _._. <ModalCwiczeniaWybranego>
