import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

test('render Start', () => {
  const wrapper = shallow(
    <App title='mockTitle' />
  );
  expect(wrapper.state().startButton).toEqual('xxx');
  // wrapper.simulate('click');
  // expect(wrapper.state().startButton).toEqual('Next Challenge');
});
