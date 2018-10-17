import React from 'react';
import styled, {keyframes} from 'styled-components';
import profile from './profile.jpg';


const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    padding-top: 128px;
    padding-bottom: 128px;


`;

export const Avatar = styled.img.attrs({
    src: profile})`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, .1);
    border-radius: 10%;
    max-width: 20em;

    @media screen and (max-width: 300px) {
        max-width: 6em;
    }

    @media screen and (max-width: 768px) {
        max-width: 10em;
    }
`

export const Bio = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    max-width: 30em;
    & p {
        color: rgba(0, 0, 0, .5);
        text-align: left;
        font-size: 1.25rem;
        line-height: 1.5;

        @media screen and (max-width: 768px) {
            font-size: 1rem;
            max-width: 15em;
        }
    }
`

export const FavoriteList = styled.div`
    max-width: 30em;
    
    & h3 {
        text-align: center;
    }
    & ul {
        list-style-type: none;
        padding: 0px;
        
        margin-right: 0px;
        margin-left: 0px;
    }

    & li {
        border-style: solid;
        border-width: 1px;
        line-height: 1.5;
        border-color: rgba(0, 0, 0, .3);
        border-style: dotted;
        border-top-width: 0;
        border-right-width: 0;
        border-left-width: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;

        & a {
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
            
            &:focus {
                opacity: 1;
                transition: opacity .15s ease-in;
            }
        
            &:visited {
                transition: color .15s ease-in;
            }
        
            @media (min-width: 30em) {
                font-size: 1rem;
            }
        }
    }

`

const AboutPage = () => (
  <Wrapper>
        <Avatar src={profile}/>
    <Bio>
        <p>I'm Ryan. I write software. I work for a startup building out microservices that aggregate and analyze social platform data.</p>
    </Bio>
    <FavoriteList>
        <h3>favs & haunts</h3>
        <ul>
            <li><a href="https://news.ycombinator.com/" target="_blank">hackernews</a></li>
            <li><a href="https://www.schneier.com/crypto-gram/" target="_blank">crypto-gram</a></li>
            <li><a href="https://react.statuscode.com/" target="_blank">react status</a></li>
        </ul> 
    </FavoriteList>
  </Wrapper>
);

export default AboutPage;
