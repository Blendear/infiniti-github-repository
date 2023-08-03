//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { useRouter } from "next/router";
import { MiniaturkaCwiczenia } from "../../../features/e-trener";
import { useState, useEffect } from "react";

const ListaCwiczen = ({ propA, propB }) => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [idOtwartegoCwiczenia, setIdOtwartegoCwiczenia] = useState("null");
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    router.query !== null && setNazwaModalu(router.query["nazwa-modalu"]);
  }, [router.query]);

  const przefiltrowaneCwiczenia = [
    {
      "id-cwiczenia": "testowe-id-a",
      fota: "testowe-fota-a.png",
      nazwa: "Testowa nazwa A",
    },
    {
      "id-cwiczenia": "testowe-id-b",
      fota: "testowe-fota-b.png",
      nazwa: "Testowa nazwa B",
    },
    {
      "id-cwiczenia": "testowe-id-c",
      fota: "testowe-fota-c.png",
      nazwa: "Testowa nazwa C",
    },
  ];

  return (
    <div className={styles["container__css-class-name"]}>
      <div className={styles["child__css-class-name"]}>
        (hook1 - NIE POWINIEN TAKI LABEL TEŻ BYĆ COMPONENTEM - WSZEDZIE GO
        POWTARZAM)Wybierz ćwiczenie i zaczynajmy!
      </div>

      {/* //       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń */}
      <div>
        {przefiltrowaneCwiczenia.map((cwiczenie) => {
          return (
            <MiniaturkaCwiczenia
              key={cwiczenie["id-cwiczenia"]}
              id={cwiczenie["id-cwiczenia"]}
              nazwa={cwiczenie.nazwa}
              fota={cwiczenie.fota}
              setNazwaModalu={setNazwaModalu}
              setIdOtwartegoCwiczenia={setIdOtwartegoCwiczenia}
            />
          );
        })}
      </div>
      {nazwaModalu !== "null" ? (
        <div>{`otwarty jest modal typu ćwiczenia [${nazwaModalu}] z cwiczeniem [${idOtwartegoCwiczenia}]`}</div>
      ) : (
        <div>zamknięty modal</div>
      )}
    </div>
  );
};
export default ListaCwiczen;

//~~ _. ListaCwiczen
//
//       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń
//
