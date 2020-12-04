import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button, Upload } from 'antd';

import FileUpload from './FileUpload';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<FileUpload />', () => {
  let wrapper;

  it('Should render <FileUpload />', () => {
    wrapper = shallow(<FileUpload />);
    expect(wrapper.find(Upload)).toHaveLength(1);
  });

  it('should render a Button in the antD form', () => {
    wrapper = shallow(<FileUpload />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
