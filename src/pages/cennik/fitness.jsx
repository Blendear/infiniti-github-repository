/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import CircleLoader from "react-spinners/CircleLoader";

const cennikImagePath =
  "/images/.dedykowane-do-strony-konkretnej/fitness/cennik/cennik-fitness.png";

export default function Cennik() {
  return (
    <div css={wrapper}>
      <Link href={cennikImagePath} passHref>
        <a target="_blank" css={imageLink}>
          <div css={imageBox}>
            {" "}
            <div css={loader}>
              <CircleLoader
                color="#5c1593"
                loading={true}
                cssOverride={{
                  display: "block",
                  margin: "0 auto",
                  borderColor: "red",
                }}
                size={"10vw"}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            <Image
              src={cennikImagePath}
              alt="Cennik Fitness"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </a>
      </Link>
    </div>
  );
}

/* ===== EMOTION ===== */

const loader = css({
  zIndex: 0,
  position: "absolute",
  top: "40%",
  justifySelf: "center",

  "@media (orientation: landscape)": {
    padding: 0,
    justifySelf: "center",
    top: "30%",
    fontSize: "2rem",
  },

  "& span": {
    justifySelf: "center",
  },
});

const wrapper = css({
  padding: "10rem 0",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  backgroundColor: "#F5F5F7",
  justifyContent: "center",
  alignItems: "center",
});

const imageLink = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.95,
  },
});

const imageBox = css({
  position: "relative",
  width: "100%",
  maxWidth: "1200px",
  maxHeight: "80vh",
  aspectRatio: "1.40273972603 / 1",
  filter: "drop-shadow(0 0 3px rgba(0,0,0,0.3))",
});
