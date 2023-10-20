import React from 'react';
import styled from "styled-components";


type WorkPropsType={
    //workImageLink:
    title:string;
    text:string;
    src:string
    //codeLink
    }
export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href ={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork=styled.div`
  background-color: #d2d76d;
  max-width: 375px;
  width:100%
`
const Image=styled.img`
  width:375px;  
  height:260px;
  object-fit: cover;
`
const Link=styled.a`

`
const Title=styled.h3`

`
const Text=styled.p`

`
