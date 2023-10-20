import React from 'react';
import {styled} from "styled-components";
import photo from "../../../assets/images/archive/my-photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"left"} justify={"space-around"}>
                <div>
                    <Name> Hi there,</Name>
                    {/*//h1 применяем только для название профессии для лучшей идентификацией роботами.*/}
                    <Name> My name is</Name>
                    <Name> Alexey Gatin</Name>
                    <MainTitle>I am Frontend developer</MainTitle>
                </div>
                {/*// сначала создаем компоненту, а потом вместо img используем стилизованную компоненту*/}
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};
//создаем стилевую компоненту для картинки. Компонента с заглавной, стилизация с маленькой.

const Photo = styled.img`
  width: 349px;
  height: 349px;
  object-fit: cover; //обязательный атрибут чтобы не скукоживало картинку! 
`
//меняем div на стилизованный компонент
const StyledMain = styled.div`
  min-height: 50vh;
  background-color: #e3cbcb;
`
//стилизация h1 и h2
const MainTitle =styled.h1`
    font-size: 42px;
`
const Name =styled.div`
  font-size: 42px;
`