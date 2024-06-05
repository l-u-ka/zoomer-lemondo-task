import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0.8rem 40px 0.8rem;
  position: relative;

  hr {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Content = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
`;

export const SectionDisplay = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
