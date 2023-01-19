import styled from "styled-components";

export const Section = styled.section`
max-width: 1216px;
margin-top: 64px;
margin-left: 345px;
margin-right: 350px;
background-color: ${({ theme }) => theme.colors.white}
`




export const Divider = styled.div`
height: 1px;
margin-top: 16px;
margin-bottom: 32px;
background-color: ${({ theme }) => theme.colors.whiteLilac};;
margin-left: 3%;
margin-right: 3%;
`
export const Header = styled.h2`
font-style: normal;
font-weight: 900;
font-size: 30px;
padding-top: 32px;
padding-left: 3%;
padding-right: 3%;
`
export const ListWrapper = styled.div`
padding-left: 3%;
padding-right: 3%;
max-width: 1151px;
`
export const List = styled.ul`
list-style: none;
color: ${({ theme }) => theme.colors.slateGray};
display: grid;
grid-template-columns: 1fr 1fr 1fr;
text-align: start;
margin-left: -50px;
`
export const ElipseWrapper = styled.div`
max-width: 9px;
margin-right: 16px;

`
export const ListItem = styled.li`
font-weight: 400;
font-size: 18px;
margin-bottom: 8px;
display: flex;
flex-direction: row;
padding-left: 3%;
padding-right: 3%;
`
