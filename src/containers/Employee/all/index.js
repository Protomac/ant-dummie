import React, { PureComponent } from 'react'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import {
  Form,
  Select,
  Button,
  Card,
} from 'antd'
import _ from 'lodash'
import moment from 'moment'
import { TableComp } from 'sz-react-utils'

import 'react-quill/dist/quill.snow.css'
import { notification } from 'antd/lib/index'
import { hideLoader, showLoader } from '../../../modules/actions'
import Request from '../../../request'
import { connect } from 'react-redux'
import { resolve } from 'path';

class AllEmployee extends React.Component{
  constructor(props){
    super(props)
  }
  apiRequest = (params)=>{
    return new Promise(async(resolve)=>{
      let data = await Request.getAllEmp(params);
      return data;
    })
  }

  render(){
    const columns = [
      {
        title: 'Name',
        key: 'name',
        sorter: true,
        dataIndex: 'name',
        searchTextName: 'name'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      }
    ]
    return (
      <PageHeaderWrapper
        title={'All Users'}>

        <Card bordered={true}>
          <TableComp columns={columns} apiRequest={this.apiRequest}/>
        </Card>

      </PageHeaderWrapper>)
  }
}