import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

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
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);

  &.active {
    font-weight: ${props => (props.lead ? '' : '600')};
    border-top: ${props => (props.lead ? '' : '1.5px solid #fff')};
    color: ${props => (props.lead ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  }

  &:hover {
    color: ${props =>
      props.lead ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 8)'};
    background: ${props =>
      props.lead ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;
