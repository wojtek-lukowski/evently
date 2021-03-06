import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component' , () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })

  test('renders the input field', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  })

})