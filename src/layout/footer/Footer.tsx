import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";

const ItemsForFooter=["Home","About","Skills","Projects","Contacts"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
            <Name>
                Alexey
            </Name>
            <SocialIconList>
                <SocialIconLink>
                    <Icon iconId={"git"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </SocialIconLink>
                <SocialIconLink>
                    <Icon iconId={"linkedin"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </SocialIconLink>
                    <Menu menuItems={ItemsForFooter}/>
                 </SocialIconList>
            <Copyright> Design and build by Alexey Gatin
            </Copyright>
        </FlexWrapper>
        </StyledFooter>

    );
};
const StyledFooter = styled.footer`
    //background-color: transparent;
`
const Name = styled.span`
`
const SocialIconList = styled.ul`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`

