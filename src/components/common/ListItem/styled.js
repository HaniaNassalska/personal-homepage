import styled from "styled-components";

export const ElipseWrapper = styled.div`
  max-width: 9px;
  margin-right: 16px;
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  padding-left: 3%;
  padding-right: 3%;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
   }
  
`
