import styled from "styled-components";

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    accent-color: ${({ theme }) => theme.colors.orangeMain};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 6px;
    outline: none;
    /* -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 0, 0, 1);
    -moz-box-shadow: 0px 0px 0px 1px rgba(255, 0, 0, 1);
    box-shadow: 0px 0px 0px 1px rgba(255, 0, 0, 1); */
    /* outline: 1px solid #1e5180; */
  }

  label {
    font-family: "FiraGO", sans-serif;
    font-size: 14px;
    font-weight: 350;
    line-height: 20px;
    margin-left: 0.5rem;

    //color: #00000099;
  }
`;
