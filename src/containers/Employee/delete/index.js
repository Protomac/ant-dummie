import React, { PureComponent } from 'react'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import {
  Form,
  Select,
  Button,
  Input,
  Table,
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
const columns = [
  {
    title: 'Id',
    key: 'empId',
    sorter: true,
    dataIndex: 'empId',
  },
  {
    title: 'Name',
    key: 'name',
    sorter: true,
    dataIndex: 'name',
  },
  {
    title: 'Gender',
    key: 'gender',
    sorter: true,
    dataIndex: 'gender',
  },
  {
    title: 'Email',
    dataIndex: 'emailId',
    key: 'emailId',
    sorter:true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter:true,
  },
  {
    title: 'Mobile No.',
    dataIndex: 'mobile',
    key: 'mobile',
    sorter:true,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    sorter:true,
  },
  {
    title: 'Joining Date',
    dataIndex: 'joiningDate',
    key: 'joiningDate',
    sorter:true,
    render: (val)=>{
      return <div>{moment(val).format('LL')}</div>
    }
  },
]
class DeleteEmployee extends React.Component{
  state = {
    selectedRowKeys: [],
    selectedRows: [], // Check here to configure the default column
    loading: false,
    tableLoading: false,
    data:[],
    pagination: {},
  };
  componentDidMount(){
    this.apiRequest()
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.apiRequest({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  apiRequest = async (params={})=>{
    this.setState({ loading: true });
    let data = await Request.getAllEmp({ ...params, regExFilters: ['emailId','name'] });
    console.log(data.data)
    const pagination = { ...this.state.pagination };
    pagination.total = data.data.total;
    this.setState({
      loading: false,
      data: data.data.data,
      pagination,
    });
  }
  delete = async () => {
    const { dispatch, form } = this.props
    this.setState({ loading: true });
    // ajax request after empty completing
    dispatch(showLoader())
    let ids = []
    _.forEach(this.state.selectedRows,(obj,index)=>{
      ids.push(obj.empId)
    })
    let x = await Request.deleteEmployees(ids)

    dispatch(hideLoader())

    if (!x.error) {
      notification.success({
        message: x.message
      })
      this.setState({selectedRowKeys: [], selectedRows: [],})
      this.apiRequest()
    } else {
      notification.error({
        message: 'Error Saving',
        description: x.message
      })
    }
  };
  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,selectedRows);
    this.setState({ selectedRowKeys , selectedRows });
  };
  render(){
    const { tableLoading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <PageHeaderWrapper
        title={'Delete Employees'}>
        <Button type="primary" style={{ marginBottom: 16 }} onClick={this.delete} disabled={!hasSelected} loading={tableLoading}>
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        <Card bordered={true}>
          <Table rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.tableLoading}
          onChange={this.handleTableChange} />
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
)(DeleteEmployee)