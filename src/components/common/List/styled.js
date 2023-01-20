import styled from "styled-components";

export const ListWrapper = styled.div`
  padding: 0% 3% 1%;
  max-width: 1151px;
`;

export const StyledList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.slateGray};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: start;
  margin-left: -50px;
  margin-right: -50px;
`;
