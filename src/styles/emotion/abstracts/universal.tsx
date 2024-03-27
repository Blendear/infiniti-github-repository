/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "./variables";
import { colors } from "./colors";

type RGBColorString = string | `rgb(${string})`;

export const universalCss = {
  button: (
    active: boolean,
    textColor?: RGBColorString,
    bgColor?: RGBColorString
  ) =>
    css({
      padding: "1rem 2rem",
      borderRadius: "1rem",
      border: "none",
      backgroundColor: bgColor || `rgb(${colors.tertiaryLight})`,
      color: !active
        ? "rgb(255,255,255,0.6)"
        : textColor || `rgb(${colors.whiteLight})`,
      fontWeight: "bold",
      fontSize: "min(2rem, 4vw)",
      fontFamily: "gothic, verdana, helvetica, sans-serif",
      filter: !active && `saturate(0)`,

      "&:enabled": {},

      "&:disabled": {
        filter: `saturate(0) !important`,

        "&:hover": {
          filter: "saturate(0) !important",
          cursor: "not-allowed !important",
        },
      },
    }),

  disabled: css({
    filter: "saturate(0) brightness(0.2)",
  }),

  container: css({
    width: "100%",
    boxSizing: "border-box",
    padding: "1.5rem",
    border: `0.1rem solid rgb(${colors.whiteLight}, 0.5)`,
    borderRadius: variables.borderRadius.md,
    boxShadow: `inset 0 0 1rem 0.5rem rgba(${colors.whiteLight},0.15)`,
    backgroundColor: `rgb(${colors.tertiaryLight})`,
  }),

  wrapperWithCenteredSvg: (wrapperSize: string, svgSize: string) =>
    css({
      justifySelf: "center",
      alignSelf: "center",
      width: wrapperSize,
      aspectRatio: "1/1",
      display: "grid",
      alignItems: "center",
      justifyItems: "center",

      "> svg": {
        width: svgSize,
        height: svgSize,
      },
    }),
};
