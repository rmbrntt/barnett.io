import {NavLink} from 'react-router-dom';
import styled, {css} from 'styled-components';

const media = {
  handheld: css`
    @media (max-width: 768px) {
      font-size: 20px;
      border-top: 0px;
      background: ${props =>
        props.lead ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.05)'};
      &:first-of-type {
        font-size: 24px;
      }
    }
  `,
  tablet: css`
    @media (max-width: 320px) {
      font-size: 20px;
      border-top: 0px;
      background: ${props =>
        props.lead ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.05)'};
      &:first-of-type {
        font-size: 24px;
      }
    }
  `,
};

export default styled(NavLink)`
  text-align: left;
  vertical-align: middle;
  padding: 0.3em 5em 0.3em 0.3em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 768px) {
    &:first-of-type {
      font-size: 24px;
    }
  }

  @media (max-width: 320px) {
    &:first-of-type {
      font-size: 24px;
    }
  }

  &.active {
    border-bottom: ${props => (props.lead ? '' : '1.5px solid #fff')};
    color: ${props => (props.lead ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
    ${media.handheld};
    ${media.tablet};
  }

  &:hover {
    ${media.handheld};
    ${media.tablet};
    color: ${props =>
      props.lead ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 8)'};
    background: ${props =>
      props.lead ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;
