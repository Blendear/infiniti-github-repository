/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import Link from "next/link";

const colorPurple = "#a22cff";
const colorBlue = "#22c1c3";

const gradientCrossbrowser = (backupColor, gradientData) => {
  return {
    backgroundColor: `${backupColor}`,
    background: `-moz-linear-gradient(${gradientData})`,
    background: `-webkit-linear-gradient(${gradientData})`,
    background: `linear-gradient(${gradientData})`,
  };
};

const glowAnimationPortrait = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(255,255,255,0.7)",
  },
  "100%": {
    boxShadow: "0 0 20px 5px rgba(255,255,255,0)",
  },
});

const glowAnimationLandscape = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(255,255,255,0.7)",
  },
  "100%": {
    boxShadow: "0 0 2.5vw 5px rgba(255,255,255,0)",
  },
});

const stronaGlownaCss = {
  container: css({
    margin: "25rem auto",
  }),

  buttonSpecial: (firstColor, secondColor) =>
    css([
      gradientCrossbrowser(
        firstColor,
        `222deg, ${firstColor} 0%, ${secondColor} 100%`
      ),
      {
        gridRow: "r-2 / r-3",
        width: "33vw",
        maxWidth: "18rem",
        aspectRatio: "5/1.8",
        margin: "40px 0",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        border: "none",
        backgroundColor: "#09adca",
        fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
        fontWeight: "bold",
        textShadow: "0 0 0.3rem #381b00",
        boxShadow: "0 0 5px 1px rgb(0,0,0,0.35)",
        transition: "all 1s",
        cursor: "pointer",
        textDecoration: "none",

        "@media (max-width: 320px)": {
          width: "36vw",
        },

        "@media (max-width: 450px)": {
          margin: "25px 0",
        },

        "&:hover": {
          ...gradientCrossbrowser(
            secondColor,
            `222deg, ${secondColor} 0%, ${firstColor} 100%`
          ),
          transition: "all 0.5s ease-out",
        },

        "& > p": {
          filter: "drop-shadow(0 0 0.3rem rgb(0,0,0,0.35))",
        },
      },
    ]),

  newLabel: css({
    position: "absolute",
    zIndex: "1",
    "-ms-transform": "translate(40px, -30px)",
    "-webkit-transform": "translate(40px, -30px)",
    "-moz-transform": "translate(40px, -30px)",
    "-o-transform": "translate(40px, -30px)",
    transform: "translate(40px, -30px)",
    padding: "0.25rem 0.75rem",
    backgroundColor: "white",
    fontSize: "clamp(0.9rem, 2.75vw, 1.4rem)",
    color: "black",
    textShadow: "none",
    animation: `${glowAnimationPortrait} 1s ease-in-out infinite alternate`,

    "@media (max-width: 390px)": {
      "-ms-transform": "translate(33px, -25px)",
      "-webkit-transform": "translate(33px, -25px)",
      "-moz-transform": "translate(33px, -25px)",
      "-o-transform": "translate(33px, -25px)",
      transform: "translate(33px, -25px)",
    },

    "@media (min-width: 500px)": {
      "-ms-transform": "translate(62px, -35px)",
      "-webkit-transform": "translate(62px, -35px)",
      "-moz-transform": "translate(62px, -35px)",
      "-o-transform": "translate(62px, -35px)",
      transform: "translate(62px, -35px)",
    },

    "@media (orientation: landscape)": {
      animation: `${glowAnimationLandscape} 1s ease-in-out infinite alternate`,
      "-webkit-animation": `${glowAnimationLandscape} 1s ease-in-out infinite alternate`, // Adding -webkit- prefix
    },
  }),
};
const AComponent = () => {
  return (
    <div css={stronaGlownaCss.container}>
      <Link href="/infiniti-app?method=qr">
        <a
          css={[
            stronaGlownaCss.buttonSpecial(colorPurple, colorBlue),
            {
              gridColumn: "4",
              "@media (orientation: landscape)": {
                gridColumn: "5",
              },
            },
          ]}
        >
          <span css={stronaGlownaCss.newLabel}>NOWOŚĆ</span>
          <p>INFINITI APP</p>
        </a>
      </Link>
    </div>
  );
};
export default AComponent;

//~~ _. Tymczasowy plik - pozniej na oryginalnej stronie głównej infiniti będzie button e-trener'a.
//
