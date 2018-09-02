import React from 'react';
import styled, {keyframes} from 'styled-components';
import deaddrop from './deaddrop.png';
import cra from './cra.jpg';
export const ProjectList = styled.div`
    & ul {
        list-style-type: none;
        padding: 0px;
        margin-right: 10px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        padding-top: ${props => props.pt ? props.pt : "128px"};
        padding-bottom: 128px;
        color: #1d0016;

        @media screen and (max-width: 300px) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: stretch;
            align-content: stretch;
        }
    
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: stretch;
            align-content: stretch;
        }
    }

`

const Li = styled.li`
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    width: 100%;
    color: #1d0016;
    font-size: 12px;
    border-width: 1px;
    line-height: 1.5;
    border-color: rgba(0, 0, 0, .3);
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    @media screen and (min-width: 52em) {
        width: 50%;
    }

    @media screen and (min-width: 40em) {
        width: 100%;
    }
`

const A = styled.a`
    color: #1d0016;
    border-bottom: 1px solid black;
    display: block;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
    color: #000;
    font-size: .775rem;
    font-weight: 400;
    text-decoration: none;
    opacity: 1;
    transition: opacity .15s ease-in;

    &:hover {
        opacity: .5;
        transition: opacity .15s ease-out;
    }

    &.active {
        opacity: 1;
        transition: opacity .15s ease-out;
    }

    &.disabled {
        pointer-events: none;
        cursor: default;
        text-decoration: none;
        color: black;
    }

    &:visited {
        transition: color .15s ease-in;
    }

    @media (min-width: 30em) {
        font-size: 1rem;
    }
}
`
const ImageWrapper = styled.div`
    background-color: #f0f5f8;
    height: 0;
    position: relative;
    border-radius: 0;
    padding-bottom: 56.25%;
`

const Image = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0px;
`

const DeadDropImage = styled(Image)`
    background-image: url(${deaddrop});
`

const ROMImage = styled(Image)`
    background-image: url(${cra});
`

const ProjectPage = () => (
    <ProjectList>
        <ul>
            <Li>
                <A href="https://github.com/rmbrntt/deaddrop" target="_blank">
                    <ImageWrapper>
                        <DeadDropImage />
                    </ImageWrapper>
                    <h3>deaddrop</h3>
                    <p>a service to publish messages by geolocation. A react native conversion is in progress. </p>
                </A>
            </Li>
            <Li>
                <A href="https://github.com/rmbrntt/react-o-matic" target="_blank">
                    <ImageWrapper>
                        <ROMImage />
                    </ImageWrapper>
                    <h3>react-o-matic</h3>
                    <p>a react starter pre-configured with redux, redux-saga, styled-components, enzyme, eslint/prettier, and some more... </p>
                </A>
            </Li>
            {/* <Li>
                <A href="javascript: void(0)" className='disabled' target="_blank">
                    <h3>others (WIP)</h3>
                    <p>frontend snippets, demos and experiments</p>
                </A>
            </Li> */}
        </ul> 
    </ProjectList>
);

export default ProjectPage;
