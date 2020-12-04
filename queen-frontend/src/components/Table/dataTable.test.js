import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Table } from 'antd';

import DataTable from './DataTable';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<DataTable />', () => {
  let wrapper;

  it('Should render <DataTable />', () => {
    wrapper = shallow(<DataTable />);
    expect(wrapper.find(Table)).toHaveLength(1);
  });
});
