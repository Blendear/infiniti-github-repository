/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

const cennikImagePath =
  "/images/.dedykowane-do-strony-konkretnej/medical/cennik/cennik-ortopedzi.png";

export default function Cennik() {
  return (
    <div css={wrapper}>
      <Link href={cennikImagePath} passHref>
        <a target="_blank" css={imageLink}>
          <div css={imageBox}>
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

const wrapper = css({
  padding: "10rem 0",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  backgroundColor: "#F5F5F7",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 13px 5px rgba(0,0,0,0.15)",
});

const imageLink = css({
  width: "80%",
  maxHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.95,
  },
});

const imageBox = css({
  position: "relative",
  aspectRatio: "1/1.402587220697765582124656997256",
  width: "100%",
  filter: "drop-shadow(0 0 3px rgba(0,0,0,0.3))",
});
