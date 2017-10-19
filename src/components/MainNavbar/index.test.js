import React from 'react';
import MainNavbar from './';

describe('MainNavbar', () => {
  it('should render', () => {
    const component = shallow(<MainNavbar />);
    expect(component).toMatchSnapshot();
  });
});
