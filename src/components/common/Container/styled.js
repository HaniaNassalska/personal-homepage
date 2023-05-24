import styled from "styled-components";

export const Container = styled.main`
  max-width: 1216px;
  margin: 0 auto;
  padding: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
    padding: 14px;
  }
`;
