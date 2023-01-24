import styled from "styled-components";

export const ListWrapper = styled.div`
  padding: 0% 3% 1%;
`;

export const StyledList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.slateGray};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: start;
  margin-left: -50px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: -40px;
    margin-right: 0px;   
    display: grid;
    grid-template-columns: 1fr;
  };
`;
