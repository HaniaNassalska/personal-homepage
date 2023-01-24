import styled from "styled-components";

export const Container = styled.main`
   max-width: 1216px;
   margin: 0 auto;
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      max-width: 100%;
      margin: 14px;
   };
`;