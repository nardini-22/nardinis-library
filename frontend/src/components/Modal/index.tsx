import { createPortal } from "react-dom";
import { ModalContainer, ModalOverlay } from "./styles";

export default function Modal({ children, open, closeModal }: any) {
  if (!open) return null;
  return createPortal(
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.getElementById("portal")!
  );
}
