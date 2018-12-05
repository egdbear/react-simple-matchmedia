import React from 'react';
import { shallow } from 'enzyme';
import MediaQuery from '../index';
import mediaQueries from '../mediaQueries';

describe('MediaQuery', () => {
  it('Should render phone mediaQuery', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        addListener: jest.fn(),
        media: query,
        matches: true,
      };
    });

    const Component = shallow(<MediaQuery media="phone"><span>Hello MediaQuery</span></MediaQuery>);
    expect(window.matchMedia).toBeCalledWith(mediaQueries.phone);
    expect(Component).toMatchSnapshot();
  });

  it('Should not render desktop mediaQuery', () => {
    window.matchMedia = jest.fn(() => {
      return {
        addListener: jest.fn(),
        matches: false,
      };
    });

    const Component = shallow(<MediaQuery media="desktop">Hello MediaQuery</MediaQuery>);
    expect(window.matchMedia).toBeCalledWith(mediaQueries.desktop);
    expect(Component).toMatchSnapshot();
    expect(Component.state().matched).toBe(false);
  });

  it('Should work as render prop', () => {
    window.matchMedia = jest.fn(() => {
      return {
        addListener: jest.fn(),
        matches: true,
      };
    });

    const Component = shallow((
      <MediaQuery media="tablet">
        {matched => matched && <span>Lorem Ipsum</span>}
      </MediaQuery>
    ));

    expect(window.matchMedia).toBeCalledWith(mediaQueries.tablet);
    expect(Component.text()).toBe('Lorem Ipsum');
    expect(Component).toMatchSnapshot();
  });

  it('Should work with custom media query', () => {
    window.matchMedia = jest.fn(() => {
      return {
        addListener: jest.fn(),
        matches: true,
      };
    });

    const media = '(min-device-width : 768px) and (max-device-width : 1024px)';

    const Component = shallow((
      <MediaQuery media={media}>match me!</MediaQuery>
    ));

    expect(window.matchMedia).toBeCalledWith(media);
    expect(Component).toMatchSnapshot();
  });
});
