import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from 'containers/NavBar';
import App from './App';

describe('<App />', () => {
  it('should render the NavBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar).length).toBe(1);
  });

  it('should render some routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route).length).not.toBe(0);
  });
});
