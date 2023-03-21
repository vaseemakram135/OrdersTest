import React, { useState } from "react";
import { Table , Input} from 'antd';
import TableComponent from "./TableComponent";
import {data} from './data'
import "./OrdersPage.css";

const OrdersPage = () => {

const [dataSource, setDataSource] = useState(data);
const [value, setValue] = useState('');

const columns = [

  {
    title: 'OrderId',
    dataIndex: 'OrderId',
    key: '1',

    sortDirections: ['descend'],
  },
  {
    title: 'Vendor name',
    dataIndex: 'Vendorname',
    defaultSortOrder: 'descend',
    key: '2'
  },
  {
    title: 'Pick up',
    dataIndex: 'Pickup',
    key: '3'

  },  
    {
    title: 'Status',
    dataIndex: 'status',
    key: '4'
  },
];

return (
  <div className="root">
    <Input
    placeholder="Search Name"
    value={value}
    className="input"
    onChange={e => {
      setValue(e.target.value)
      const currValue = e.target.value;
      setDataSource(data.filter(entry =>
        Object.values(entry).includes(e.target.value) || e.target.value == '' 
      ))
      console.log('==============', data.filter(entry =>
        Object.values(entry).includes(e.target.value)
      ))
    }}
  />
    <TableComponent columns={columns} sourceData={dataSource}/>
  </div>
);
};

export default OrdersPage;
