export interface ModalProps {
  additionalContainerClassName?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export type ModalWrapperProps = Omit<ModalProps, "onClose">;

export interface DialogModalProps extends ModalProps {}

export interface AlertDialogProps extends ModalProps {
  title: string;
  cancelBtnText: string;
  confirmBtnText: string;
  onConfirm: () => void;
}
