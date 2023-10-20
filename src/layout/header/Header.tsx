import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";

//массив данных для меню header
const ItemsForHeader=["Home","About","Skills","Projects","Contacts"]
//внутри компонента Header отрисовывается другая компонента StyledHeader
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={ItemsForHeader}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: aquamarine;
  display:flex;
 justify-content: space-between;
`
