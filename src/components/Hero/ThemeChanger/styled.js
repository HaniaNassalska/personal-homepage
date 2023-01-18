import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
padding: 0px;
gap: 12px;

   `;

export const ModeText = styled.div`
   width: 99px;
height: 16px;
   `;

   export const Text = styled.span`
   font-weight: 700;
font-size: 12px;
line-height: 130%;
display: flex;
align-items: center;
text-transform: uppercase;
color: ${({theme})=> theme.colors.slateGray};


   `