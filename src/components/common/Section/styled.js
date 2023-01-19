import styled from "styled-components";

export const StyledSection = styled.section`
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
