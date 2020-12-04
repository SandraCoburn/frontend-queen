import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { StyledTable } from './DataTable.styles';

const DataTable = ({ data }) => {
  const columns = [
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Visitors',
      dataIndex: 'visitors',
      key: 'visitors',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];
  // const data = [
  //   {
  //     id: { $oid: '5fa2d5cffc13ae5d48000008' },
  //     domain: 'MySpace.com',
  //     visitors: 786,
  //     date: '2020-06-01',
  //   },
  // ];

  return (
    <StyledTable>
      <Table columns={columns} dataSource={data} />
    </StyledTable>
  );
};

export default DataTable;
