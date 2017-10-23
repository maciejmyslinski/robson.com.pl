import React from 'react';
import MainNavbar from './';

describe('MainNavbar', () => {
  it('should render', () => {
    const logo = {
      resolutions: {},
    };
    const component = shallow(<MainNavbar logo={logo} />);
    expect(component).toMatchSnapshot();
  });
});
