import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 160px;
`;

export const DropdownButton = styled.div`
  background: #f2f2f2;
  box-shadow: 0px 2px 4px 0px #0000001a;
  width: 100%;
  height: 32px;
  border-radius: 30px;
  font-family: "FiraGO", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #e0e0e0;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  background: #f2f2f2;
  box-shadow: 0px 2px 4px 0px #0000001a;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  font-family: "FiraGO", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

export const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-135deg)" : "rotate(45deg)"};
  transition: transform 0.2s;
`;
