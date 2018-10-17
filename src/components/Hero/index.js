import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid: auto-flow 1fr / 1fr;
    background-color: #f0f5f8;
    color: #1d0016;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 128px;
    padding-bottom: 128px;
`

const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    padding-right: 8px;
    max-width: 72rem;
    box-sizing: border-box;
`

const H3 = styled.h3`
    color: #1d0016;
    border-width: 0px;
    border-style: solid;
    margin-bottom: 0px;
    font-size: 16px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;

    @media screen and (min-width: 52em) {
        font-size: 20px;
    }

    @media screen and (min-width: 40em) {
        font-size: 18px;
    }
`

const H1 = styled.h1`
    color: #1d0016;
    line-height: 1.25;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: 52em) {
        font-size: 64px;
    }

    @media screen and (min-width: 40em) {
        font-size: 48px;
    }
`

const Hero = (props) => (
    <Wrapper>
        <Content>
            <H3>Ryan Barnett. Software engineer in Washington, DC.</H3>
            <H1>I do full stack things with Python, React, and Kubernetes.</H1>
        </Content>
    </Wrapper>
)

export default Hero;