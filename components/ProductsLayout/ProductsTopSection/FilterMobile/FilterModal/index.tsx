import React, { ReactNode } from "react";
import CloseX from "@/assets/images/close-icon.png";
import { CloseButton, ModalBackground, ModalContent } from "./styled";

interface Props {
  isOpen: boolean;
  onClose: ()=>void;
  children: ReactNode;
}

export default function FilterModal({ isOpen, onClose, children }: Props){
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton src={CloseX.src} onClick={onClose}/>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
