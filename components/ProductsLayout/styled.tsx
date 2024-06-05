import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8px 40px 8px;
  position: relative;

  hr {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
