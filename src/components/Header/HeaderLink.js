import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 1px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 10px;
  border-bottom: 1.5px solid #fff;
  color: rgba(255, 255, 255, 0.9);

  &:active {
    font-weight: 600;
    color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;
