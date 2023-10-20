import React from 'react';
import styled from "styled-components";

export const Contacts = () => {
    return (
        <ContactBoxStyled>
        <ContactStyled> For any questions please e-mail/Whats'up me </ContactStyled>
        <EmailStyled> alexey.gatin78@gmail.com</EmailStyled>
            <EmailStyled> +79168030633</EmailStyled>
        </ContactBoxStyled>
    );
};

const ContactBoxStyled=styled.div`
    display: compact;
    justify-content: center; //почему не работает???
    background-color: aqua;
`
const ContactStyled=styled.div`
    font-size: 42px;
`
const EmailStyled=styled.div`
  font-size: 42px;
`