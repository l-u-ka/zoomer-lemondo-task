import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 40px 0;

  & > div {
    display: flex;
    width: 100%;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
