import React from 'react';
import { shallow } from 'enzyme';
import useForm from '~/hooks/useForm';

const HookWrapper = ({ hook }) => {
  const useFormHook = hook ? hook() : undefined;
  return <div hook={useFormHook} />;
};

describe('useForm hook', () => {
  test('Should render', () => {
    const wrapper = shallow(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Should set an initial value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useForm('')} />);
    const { hook } = wrapper.find('div').props();
    const { values } = hook;
    expect(values).toEqual('');
  });

  test('Should receive value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useForm('test value')} />);
    const { hook } = wrapper.find('div').props();
    const { values } = hook;
    expect(values).toEqual('test value');
  });

  test('Should set a value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useForm('test value')} />);
    const { hook } = wrapper.find('div').props();
    const { values, handleChange } = hook;

    handleChange({ target: { value: 'test value' } });

    expect(values).toEqual('test value');
  });
});
