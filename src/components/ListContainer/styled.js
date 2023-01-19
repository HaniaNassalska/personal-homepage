import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1216px;
height: 404px;
margin-top: 64px;
margin-left: 345px;
margin-right: 350px;
background-color: ${({ theme }) => theme.colors.white}
`

export const List = styled.ul`
list-style: none;
max-width: 1151px;
height: 256px;
display: flex;
flex-wrap: wrap;
flex-direction: column;

`
export const HeaderContainer = styled.div`
height: 1px;
max-width: 1151px;
margin-top: 16px;
margin-bottom: 32px;
background-color: yellow;
`
export const Header = styled.h2`
font-style: normal;
font-weight: 900;
font-size: 30px;
padding: 32px;
`

export const ListItem = styled.li`
font-weight: 400;
font-size: 18px;


`