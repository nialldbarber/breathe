import React from 'react';
import { mount } from 'enzyme';
import Counter from '~/components/counter';

describe('<Counter />', () => {
  const intervalValue = 20;
  const minuteValue = 10;

  let component;
  beforeEach(() => {
    component = mount(
      <Counter interval={intervalValue} minutes={minuteValue} />
    );
  });

  afterEach(() => component.unmount());

  test('Interval value works', () => {
    expect(component.props().interval).toEqual(intervalValue);
  });

  test('Minute value works', () => {
    expect(component.props().minutes).toEqual(minuteValue);
  });
});
