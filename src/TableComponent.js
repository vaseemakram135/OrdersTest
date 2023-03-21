import React from 'react'

import { Table , Input} from 'antd';

export default function TableComponent(props) {
  const {sourceData, columns} = props
  return (
    <div><Table dataSource={sourceData} columns={columns}/></div>
  )
}
