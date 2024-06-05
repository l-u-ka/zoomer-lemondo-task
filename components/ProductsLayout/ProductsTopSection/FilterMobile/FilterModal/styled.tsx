import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalBackground = styled.div`
  position: absolute;
  height: fit-content;
  top: 0px;
  right: 0px;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px 25px;
  width: 60%;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 1%;
  right: 58%;
  cursor: pointer;
`;
