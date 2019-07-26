import React, { PureComponent } from 'react'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import Highlighter from 'react-highlight-words';
import {
  Icon,
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
import { withRouter } from "react-router-dom";

class DeleteEmployee extends React.Component{
  state = {
    selectedRowKeys: [],
    selectedRows: [], // Check here to configure the default column
    loading: false,
    tableLoading: false,
    data:[],
    pagination: {},
    searchText: '',
  };
  componentDidMount(){
    this.apiRequest()
    console.log(this.props)

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
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  render(){
    const columns = [
      {
        title: 'Id',
        key: 'empId',
        sorter: true,
        dataIndex: 'empId',
        ...this.getColumnSearchProps('empId'),
      },
      {
        title: 'Name',
        key: 'name',
        sorter: true,
        dataIndex: 'name',
        ...this.getColumnSearchProps('name'),
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
        ...this.getColumnSearchProps('emailId'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter:true,
        ...this.getColumnSearchProps('address'),
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
    const { tableLoading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <PageHeaderWrapper
        title={'Employees List'}>
        <Button type="primary" style={{ marginBottom: 16 }} onClick={this.delete} disabled={!hasSelected} loading={tableLoading}>
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        <Card bordered={true}>
          <Table rowSelection={rowSelection}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.props.history.push('/employee/update')
                // this.setState({details:true,title:'Update Employee'})
              }, // click row
              
            };
          }}
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


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteEmployee))