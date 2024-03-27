/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ModalWrapperProps } from "../types/types";
import { useEffect } from "react";
import { enableBodyOverflow } from "../utils/enableBodyOverflow";

const modalWrapperCss = {
  container: css({
    overscrollBehavior: "contain",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100vh",
    border: "none",
    display: "grid",
    gridTemplateRows: "max-content 1fr",
    overflowY: "hidden", // Set overflow-y to hidden initially
    backgroundColor: "rgba(0, 0, 0, 0.75)",

    "& > div": {
      overflowY: "scroll",
    },

    "& *": {
      color: "white",
    },
  }),
};

export const ModalWrapper = (props: ModalWrapperProps) => {
  const disableBodyOverflow = () => {
    document.body.classList.add("dialog-modal-open");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //   behavior: "instant",
    });
  };

  useEffect(() => {
    if (props.isOpen) {
      disableBodyOverflow();
      scrollToTop();
    } else {
      enableBodyOverflow();
    }
  }, [props.isOpen]);

  return (
    <dialog
      css={[modalWrapperCss.container]}
      open={props.isOpen}
      style={props.isOpen ? { display: "block" } : { display: "none" }}
    >
      {props.children}
    </dialog>
  );
};
