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
    return new Promise(async (resolve)=>{
      let data = await Request.getAllEmp({...params, regExFilters: ['emailId','name'] });
      console.log(data.data)
      resolve(data.data);
    })
  }

  render(){
    const columns = [
      {
        title: 'Id',
        key: 'empId',
        sorter: true,
        dataIndex: 'empId',
        searchTextName: 'empId'
      },
      {
        title: 'Name',
        key: 'name',
        sorter: true,
        dataIndex: 'name',
        searchTextName: 'name'
      },
      {
        title: 'Gender',
        key: 'gender',
        sorter: true,
        dataIndex: 'gender',
        filters: [{ text: 'Male', value: 'm' }, { text: 'Female', value: 'f' }]
      },
      {
        title: 'Email',
        dataIndex: 'emailId',
        key: 'emailId',
        sorter:true,
        searchTextName : 'emailId'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter:true,
        searchTextName : 'address'
      },
      {
        title: 'Mobile No.',
        dataIndex: 'mobile',
        key: 'mobile',
        sorter:true,
        searchTextName : 'mobile'
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter:true,
        searchTextName : 'salary'
      },
      {
        title: 'Joining Date',
        dataIndex: 'joiningDate',
        key: 'joiningDate',
        sorter:true,
        searchTextName : 'joiningDate',
        render: (val)=>{
          return <div>{moment(val).format('LL')}</div>
        }
      },
    ]
    return (
      <PageHeaderWrapper
        title={'All Employees'}>

        <Card bordered={true}>
          <TableComp columns={columns} apiRequest={(params)=>this.apiRequest(params)}/>
        </Card>

      </PageHeaderWrapper>)
  }
}
const mapStateToProps = ({ global }) => ({
  categories: global.categories
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllEmployee)