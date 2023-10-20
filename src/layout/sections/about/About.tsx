import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SubSectionTitle} from "../../../components/SubSectionTitle";
import wallicon from "../../../assets/images/wall-sprite.svg"
import {SectionTitle} from "../../../components/SectionTitle";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={"left"} justify={"space-around"}>
                <div>
                <span><SubSectionTitle> About Me </SubSectionTitle></span>
                <SubSectionTitleText> I am IT child with adult finance background. You'd be amazed if you hire
                    me. </SubSectionTitleText>
                <span><SubSectionTitle> Education</SubSectionTitle></span>
                <SubSectionTitleText> Perm State Technical University, Finance and Economics </SubSectionTitleText>
            </div>
                <WallPicture src={wallicon} alt=""/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const SubSectionTitleText=styled.h5`
`
const WallPicture=styled.img``

const StyledAbout=styled.div`
  background-color: #d9cbe3;
  //Нельзя ставить жесткую высоту чтобы можно было добавлять. В сегда ставить на всякий случай чтобы корректно отображалось с разных устройств.
  min-height: 50vh;
`