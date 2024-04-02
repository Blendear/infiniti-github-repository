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
import { FaExclamation } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { TbReplaceFilled } from "react-icons/tb";

const ListaCwiczen = () => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [filtr, setFiltr] = useState("null");
  const [wartosc, setWartosc] = useState("null");
  const [otwarteCwiczenie, setOtwarteCwiczenie] = useState({});
  // Hardcoded to true, since the basic service is free for every account
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(true);

  const [filteredAndSortedExercises, setFilteredAndSortedExercises] = useState(
    []
  );

  const [hasExercisesBecauseOfAltMachine, setHasExercisesBecauseOfAltMachine] =
    useState(false);

  const [hasExercisesBecauseOfSubMuscle, setHasExercisesBecauseOfSubMuscle] =
    useState(false);

  const iloscCwiczen = useRef(0);

  const [_, setForceRerender] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.query !== null &&
      (setNazwaModalu(router.query["nazwa-modalu"]),
      setFiltr(router.query["filtr"]),
      setWartosc(router.query["wartosc"]));

    if (router.query["filtr"] === "gr-miesniowa") {
      const newExercises = cwiczenia
        .filter((cwiczenie) => {
          // Filter exercises based on the chosen muscle group
          const includesMuscleGroup =
            cwiczenie["cwiczone-miesnie"].includes(wartosc);
          if (
            includesMuscleGroup &&
            cwiczenie["cwiczone-miesnie"].indexOf(wartosc) !== 0 &&
            !hasExercisesBecauseOfSubMuscle
          ) {
            // Responsible for showing the info box that says, that there are
            // exercises because of the sub muscle matches this exercise
            setHasExercisesBecauseOfSubMuscle(true);
          }
          return includesMuscleGroup;
        })
        .sort((a, b) => {
          // Sort exercises based on whether the chosen muscle group is first in the 'cwiczone-miesnie' array
          const aIndex = a["cwiczone-miesnie"].indexOf(wartosc);
          const bIndex = b["cwiczone-miesnie"].indexOf(wartosc);
          return aIndex - bIndex;
        });

      setFilteredAndSortedExercises(newExercises);
    }
  }, [router.query, filtr, wartosc]);

  // Disabled, since the basic service is free for every account
  // useCheckSubscriptionStatus(setPokazInfoNiezasubskrybowanemu);

  useEffect(() => {
    iloscCwiczen.current === -1 && setForceRerender((prev) => !prev);
  }, [iloscCwiczen]);

  const handlebackButton = () => {
    router.push("/infiniti-app?method=qr");
  };

  const renderExercisesByExactMuscle = () => {
    // Orders the exercises, to render those with the exact muscle as first in
    // their "muscles trained" array in the first index
    return filteredAndSortedExercises.map((cwiczenie, index) => {
      iloscCwiczen.current += 1;
      return (
        <MiniaturkaCwiczenia
          variant={
            cwiczenie["cwiczone-miesnie"][0] !== wartosc
              ? "sub-muscle"
              : "classic"
          }
          key={index}
          cwiczenie={cwiczenie}
          setNazwaModalu={setNazwaModalu}
          setOtwarteCwiczenie={setOtwarteCwiczenie}
        />
      );
    });
  };

  const renderInfoBox = (variant) => {
    return (
      <>
        {/* {hasExercisesBecauseOfAltMachine && <div>alt machine</div>}
        {hasExercisesBecauseOfSubMuscle && <div>sub muscle</div>} */}
        <div
          className={
            styles[
              "modal-cwiczenia-wybranego__lokalizacja-maszyny__info-o-alternatywnych-maszynach"
            ]
          }
          style={{ gridColumn: "1/-1" }}
        >
          {/* TODO - Refactor this info box and the info box on "exercise details" into a separate component */}
          <TytulBezTla htmlElementType="h2">
            <div>
              <p style={{ fontSize: "25px" }}>
                {variant === "sub-muscle" ? <GiBiceps /> : <TbReplaceFilled />}
              </p>
            </div>

            <p style={{ padding: "1.5rem 2rem" }}>
              {`${
                variant === "sub-muscle"
                  ? "Ta ikona oznacza, że wybrany mięsień pracuje w ćwiczeniu jako dodatkowy (słabiej)"
                  : "Ta ikona oznacza, że wybrana maszyna służy jako alternatywa dla tej z nagrania"
              }`}
            </p>
          </TytulBezTla>
        </div>
      </>
    );
  };

  const renderExercisesByMachineNumber = () => {
    return cwiczenia.map((cwiczenie, index) => {
      let anAltMachineMatchesThisExercise = false;

      if (cwiczenie.idMaszynAlternatywnych) {
        anAltMachineMatchesThisExercise =
          cwiczenie.idMaszynAlternatywnych.includes(wartosc);
      }

      // Responsible for showing the info box that says, that there are
      // exercises because of the alternative machine matches this exercise
      // alt machines array
      if (anAltMachineMatchesThisExercise && !hasExercisesBecauseOfAltMachine) {
        setHasExercisesBecauseOfAltMachine(true);
      }

      if (
        // If the filter is anything but "gr-miesniowa", then check if the
        // machine of this exercise is listed as the main or alternative
        // machine on any exercise. List all of the legitimate exercises
        wartosc === cwiczenie.idMaszynyUzywanej ||
        anAltMachineMatchesThisExercise
      ) {
        iloscCwiczen.current += 1;

        return (
          <MiniaturkaCwiczenia
            variant={
              anAltMachineMatchesThisExercise ? "alt-machine" : "classic"
            }
            key={index}
            cwiczenie={cwiczenie}
            setNazwaModalu={setNazwaModalu}
            setOtwarteCwiczenie={setOtwarteCwiczenie}
          />
        );
      }
    });
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

        {(
          <div
            className={styles["lista-cwiczen__lista"]}
            style={
              iloscCwiczen.current === 1 ? { gridTemplateColumns: "1fr" } : {}
            }
          >
            {hasExercisesBecauseOfAltMachine && renderInfoBox("alt-machine")}

            {hasExercisesBecauseOfSubMuscle && renderInfoBox("sub-muscle")}

            {filtr === "gr-miesniowa" && renderExercisesByExactMuscle()}

            {filtr === "maszyna" && renderExercisesByMachineNumber()}

            {filtr === "qr" && renderExercisesByMachineNumber()}

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
                  alt={`Notatka visuala mówiąca, że szukane ćwiczenia są w trakcie przygotowań`}
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
