import React from 'react';
import { shallow } from 'enzyme';
import isMatching from 'css-mediaquery';
import useReactSimpleMatchMedia from '../index';

beforeEach(() => {
  // mock window.matchMedia (use 'css-mediaquery')
  window.matchMedia = jest.fn().mockImplementation((query) => {
    const width = global.innerWidth;
    return {
      addListener: jest.fn(),
      media: query,
      matches: isMatching.match(query, { type: 'screen', width }),
    };
  });
});

const TestComponent = ({ query }) => { // eslint-disable-line react/prop-types
  const isMatched = useReactSimpleMatchMedia(query);
  if (isMatched) return <div>should be visible</div>;
  return null;
};

describe('useReactSimpleMatchMedia', () => {
  it('should match phone viewport', () => {
    global.innerWidth = 500;
    const Component = shallow(<TestComponent query="phone" />);
    expect(Component).toMatchSnapshot();
    expect(Component.text()).toBe('should be visible');
  });

  it('should not match phone viewport', () => {
    global.innerWidth = 900;
    const Component = shallow(<TestComponent query="phone" />);
    expect(Component).toMatchSnapshot();
    expect(Component.text()).toBe('');
  });

  it('should match custom viewport', () => {
    global.innerWidth = 800;
    const Component = shallow(<TestComponent query="(min-width : 768px) and (max-width : 1024px)" />);
    expect(Component).toMatchSnapshot();
    expect(Component.text()).toBe('should be visible');
  });
});
