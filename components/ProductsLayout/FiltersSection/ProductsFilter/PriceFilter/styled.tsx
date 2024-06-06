import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 0.5rem;
  }
`;

export const PriceInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 35px 0 0px 0px;
`;

export const Field = styled.div`
  display: flex;
  width: 45%;
  height: 45px;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 19px;
    border-radius: 5px;
    text-align: right;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.colors.orangeMain};
    -moz-appearance: textfield;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    font-family: "FiraGO", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
  span {
    position: absolute;
    left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const Slider = styled.div`
  margin-top: 2rem;
  height: 5px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.orangeSecondary};
  border-radius: 5px;
`;

export const Progress = styled.div<{ $min: number; $max: number }>`
  height: 100%;
  left: ${({ $min }) => `${($min / 20200) * 100}%`};
  right: ${({ $max }) => `${100 - ($max / 20200) * 100}%`};
  position: absolute;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orangeMain};

  &::before,
  &::after {
    position: absolute;
    bottom: -30px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blackMain};
    font-family: "FiraGO", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  &::before {
    content: "${({ $min }) => $min}₾";
    left: 8px;
    transform: translateX(-50%);
  }

  &::after {
    content: "${({ $max }) => $max}₾";
    right: 14px;
    transform: translateX(50%);
  }
`;

export const RangeInput = styled.div`
  position: relative;
  input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 5px;
    top: -5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-webkit-slider-thumb {
      height: 17px;
      width: 17px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.orangeMain};
      pointer-events: auto;
      -webkit-appearance: none;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
    }
    &::-moz-range-thumb {
      height: 17px;
      width: 17px;
      border: none;
      border-radius: 50%;
      background: #17a2b8;
      pointer-events: auto;
      -moz-appearance: none;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
    }
  }
`;
