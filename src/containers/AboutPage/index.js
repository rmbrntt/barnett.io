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
    padding: 1rem;

`;

const Avatar = styled.img`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, .1);
    border-radius: 10%;
    height: 400px;
    width: 400px;
    max-width: 30em;
`
const Bio = styled.div`
    & p {
        text-align: right;
    }
`

const FavoriteList = styled.div`
    & h3 {
        text-align: center;
    }
    & ul {
        list-style-type: none;
        padding: 0px;
        max-width: 30em;
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
        <p>I'm Ryan. I write software. Currently, I work for a startup building out microservices that aggregate and analyze social platform data.</p>
    </Bio>
    <FavoriteList>
        <h3>favs & haunts</h3>
        <ul>
            <li><a href="https://news.ycombinator.com/" target="_blank">hackernews</a></li>
        </ul> 
    </FavoriteList>
  </Wrapper>
);

export default AboutPage;
