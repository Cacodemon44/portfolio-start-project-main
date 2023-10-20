import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import jsImg from "./../../../assets/images/proj-1.jpeg"
import reactImg from "./../../../assets/images/proj-2.jpeg"
import tsImg from "./../../../assets/images/proj-3.jpeg"

const ItemsForWorks=["JS","React","TS"]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
            My projects
            </SectionTitle>
            <Menu menuItems={ItemsForWorks}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Java Script"}
                      text={"Description of sadsadsadasdsadsad dadasdsadasdsadasd asdsadasdasdasdasd"}
                        src={jsImg}/>
                <Work title={"React"}
                      text={"Sdasdasdsad sadsadasdsa asdsadadsad sadsa d sadsad sad asd sad "}
                        src={reactImg}/>
                <Work title={"TS"}
                      text={"Sdasdasdsad sadsadasdsa asdsadadsad sadsa d sadsad sad asd sad "}
                      src={tsImg}/>
                </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 75vh;
  background-color: #dbecff;
`
