import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '~/components/button';

describe('<Button />', () => {
  const buttonText = 'Click me!';
  let component;
  beforeEach(() => {
    component = mount(<Button type="button" text={buttonText} fn={() => {}} />);
  });

  test('To match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('Renders text provided', () => {
    const text = component.find('button').text();
    expect(text).toBe(buttonText);
  });

  test('Event fires when clicked', () => {
    const mockCallback = jest.fn();

    const buttonClicked = shallow(<Button fn={mockCallback} />);
    buttonClicked.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
