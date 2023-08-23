//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { useRouter } from "next/router";
import { MiniaturkaCwiczenia } from "../../../features/e-trener";
import { useState, useEffect } from "react";
import { TytulBezTla, TytulZTlemKolorowym } from "../../../features/e-trener";
import ModalCwiczeniaWybranego from "../../../features/e-trener/components/ModalCwiczeniaWybranego";
import { cwiczenia } from "../../../features/e-trener";
import stripeGetUserInfo from "../../../utils/stripeGetUserInfo";
import { useUser } from "@auth0/nextjs-auth0/client";

const ListaCwiczen = () => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [filtr, setFiltr] = useState("null");
  const [wartosc, setWartosc] = useState("null");
  const [otwarteCwiczenie, setOtwarteCwiczenie] = useState({});
  const { user, isLoading } = useUser();
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(false);

  const router = useRouter();

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

  return (
    pokazInfoNiezasubskrybowanemu && (
      <div className={styles["lista-cwiczen__container"]}>
        <TytulZTlemKolorowym>
          WYBIERZ ĆWICZENIE I ZACZYNAJMY!
        </TytulZTlemKolorowym>
        <TytulBezTla>
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
              console.log("OTO ITEM Z LISTY CWICZEN: ", cwiczenie);
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
        </div>
        {nazwaModalu !== "null" && (
          <ModalCwiczeniaWybranego
            setNazwaModalu={setNazwaModalu}
            nazwaModalu={nazwaModalu}
            otwarteCwiczenie={otwarteCwiczenie}
          />
        )}
      </div>
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
