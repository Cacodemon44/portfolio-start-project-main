import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            {/*//используем наш FlexWrapper для оформления секции скиллов*/}
            <FlexWrapper wrap={"wrap"}  justify={"space-between"}>
                <Skill iconId={"code"}
                       title={"html5"}
                       description={"Html is great Html is great Html is great "}/>
                <Skill iconId={"css"}
                       title ={"css3"}
                       description={"CSS is beaty CSS is beaty CSS is beaty"}/>
                <Skill iconId={"js"}
                       title ={"JS"}
                       description={"JS is awesome JS is awesomeJS is awesome"}/>
                <Skill iconId={"react"}
                       title ={"React"}
                       description={"React is unbelievable React is unbelievable"}/>
                <Skill iconId={"Figma"}
                       title ={"Figma"}
                       description={"Figma is creavite React is unbelievable"}/>
                <Skill iconId={"ts"}
                       title ={"typeScript"}
                       description={"TS is creavite TS is unbelievable"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #f5b6b6;
  //Нельзя ставить жесткую высоту чтобы можно было добавлять. В сегда ставить на всякий случай чтобы корректно отображалось с разных устройств.
  min-height: 100vh;
`