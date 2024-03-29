// import SVGTytulINFINITI from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";

import SVGOtoczkaGodzinOtwarciaDol from "./svg-obramowka-dol";
import SVGOtoczkaGodzinOtwarciaGora from "./svg-obramowka-gora";

const GodzinyOtwarciaKS = () => {
  return (
    <section
      className={styles["layout__strona-glowna__cala-strona__godziny-otwarcia"]}
    >
      <h5
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia--tekst-tytulowy"
          ]
        }
      >
        GODZINY OTWARCIA
      </h5>

      <span
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia--podkreslnik"
          ]
        }
      ></span>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--obramowka--gora"
          ]
        }
      >
        <SVGOtoczkaGodzinOtwarciaGora />
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--obramowka--dol"
          ]
        }
      >
        <SVGOtoczkaGodzinOtwarciaDol />
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--tytul"
          ]
        }
      >
        KLUB
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--linia-dzielaca--1"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--rozpiska-godzinowa--1"
          ]
        }
      >
        <strong>PON. - PT.</strong> <br /> 06:30 - 22:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--linia-dzielaca--2"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--rozpiska-godzinowa--2"
          ]
        }
      >
        <strong>SOBOTA</strong> <br /> 08:00 - 20:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--linia-dzielaca--3"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__klub--rozpiska-godzinowa--3"
          ]
        }
      >
        <strong>NIEDZIELA</strong> <br /> 08:00 - 18:00
      </div>
      {/* 
      
      //

      // KLUB   /\

      // SAUNA \/

      //
      
      */}
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--obramowka--gora"
          ]
        }
      >
        <SVGOtoczkaGodzinOtwarciaGora />
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--obramowka--dol"
          ]
        }
      >
        <SVGOtoczkaGodzinOtwarciaDol />
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--tytul"
          ]
        }
      >
        SAUNA
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--1--lewo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--1--tekst"
          ]
        }
      >
        KOBIETY
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--1--prawo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--1-a"
          ]
        }
      >
        <strong>PON. & ŚR.</strong> <br /> 09:00 - 12:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--1-b"
          ]
        }
      >
        <strong>WT. & CZW.</strong> <br /> 17:00 - 21:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--2--lewo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--2--tekst"
          ]
        }
      >
        MĘŻCZYŹNI
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--2--prawo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--2-a"
          ]
        }
      >
        <strong>PN. & ŚR.</strong> <br /> 17:00 - 21:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--2-b"
          ]
        }
      >
        <strong>WT. & CZW.</strong> <br /> 09:00 - 12:00
      </div>

      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--3--lewo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--3--tekst"
          ]
        }
      >
        KOEDUKACJA
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--linia-dzielaca--3--prawo"
          ]
        }
      ></div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--3-a"
          ]
        }
      >
        <strong>SOBOTA</strong> <br /> 09:00 - 12:00 <br /> 16:00 - 19:00
      </div>
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia__sauna--rozpiska-godzinowa--3-b"
          ]
        }
      >
        <strong>NIEDZIELA</strong> <br /> 11:00 - 17:00
      </div>
      <p
        className={
          styles[
            "layout__strona-glowna__cala-strona__godziny-otwarcia--dopisek-z-gwiazdka-na-dole"
          ]
        }
      >
        * Sauna włączana na życzenie klienta
      </p>
    </section>
  );
};
export default GodzinyOtwarciaKS;
