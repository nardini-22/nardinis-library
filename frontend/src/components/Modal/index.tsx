import { createPortal } from "react-dom";
import { ModalContainer, ModalOverlay, ModalWrapper } from "./styles";

export default function Modal({ children, open, closeModal }: any) {
  if (!open) return null;
  return createPortal(
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalWrapper>
        <ModalContainer>{children}</ModalContainer>
      </ModalWrapper>
    </>,
    document.getElementById("portal")!
  );
}
