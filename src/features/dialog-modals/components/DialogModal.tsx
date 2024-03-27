/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DialogModalProps } from "../types/types";
import { handleCloseDialogModal } from "../utils/handleCloseDialogModal";
import { ModalWrapper } from "./ModalWrapper";

export const DialogModal = (props: DialogModalProps) => {
  return (
    <ModalWrapper isOpen={props.isOpen}>
      {props.onClose && (
        <button
          onClick={() => {
            handleCloseDialogModal(props.onClose);
          }}
        >
          X
        </button>
      )}
      {props.children}
    </ModalWrapper>
  );
};
