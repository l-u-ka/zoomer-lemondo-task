import TickIcon from "@/assets/images/tick.png";
import styled from "styled-components";

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    accent-color: ${({ theme }) => theme.colors.orangeMain};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;

    &:checked {
      background-color: ${({ theme }) => theme.colors.orangeMain};
      outline: none;
      background-image: url(${TickIcon.src});
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
    outline: 1px solid ${({ theme }) => theme.colors.blackMain};
  }

  label {
    font-family: "FiraGO", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.5rem;
  }
`;
