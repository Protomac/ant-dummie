import React, { Component } from 'react'
import PageHeaderWrapper from '../../components/PageHeaderWrapper'
import styles from './unassignedTickets.less'
import './style.css'
import { TableComp } from 'sz-react-utils'
import {
  Table,
  Badge,
  Card,
  Tooltip,
  notification,
  Switch,
  Input, Button, Icon,
  Row,
  Col
} from 'antd'
import Request from '../../request'
import Color from 'color'
import _ from 'lodash'
import Highlighter from 'react-highlight-words'
// import styles from './styles.less'
import { connect } from 'react-redux'
import memoizeOne from 'memoize-one'
import update from 'immutability-helper'
import { getUrlPushWrapper } from '../../routes'
import moment from 'moment'

class UnassignedTickets extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.apiRequestUnassTicket()
  }

  apiRequestUnassTicket = (params) => {
    return new Promise(async (resolve) => {
      let data = await Request.getUnassignedTickets({ ...params, regExFilters: ['status', 'title', 'department', 'priority'] })
      console.log(data.data, "000000000")
      this.setState({
        data:  data.data
      })
      resolve(data.data)
    })
  }

  apiRequestAllTicket = (params) => {
    return new Promise(async (resolve) => {
      let data = await Request.getAllEmployees({ ...params, regExFilters: ['emailId', 'empId'] })

      console.log(data, "000000000")

      resolve(data)
    })
  }

  render() {
    const columnsUnassTicket = [
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        searchTextName: 'status',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        searchTextName: 'title',
      },
      {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        searchTextName: 'department',
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        searchTextName: 'priority',
      },
      {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (val) => {
          return <div>{moment(val).format('LL')}</div>
        }
      },
    ]
    const columnsAllTicket = [
      {
        title: 'email',
        key: 'emailId',
        searchTextName: 'emailId',
        dataIndex: 'emailId',
      },
      {
        title: 'empId',
        dataIndex: 'empId',
        key: 'empId',
        searchTextName: 'empId',
      },
    ]


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }

    return (
      <PageHeaderWrapper
        title={'Unassigned Tickets'}>
        <div>
          <Row>
            <Col span={12}>
              <Card bordered={true}>
              {console.log(async (params) => await this.apiRequestUnassTicket(params))}
              {/* <TableComp rowSelection={rowSelection} columns={columnsUnassTicket} apiRequest={(params) => this.apiRequestUnassTicket(params)} /> */}
              <Table rowSelection={rowSelection} columns={columnsUnassTicket} dataSource={this.state.data} />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={true}>
                <TableComp columns={columnsAllTicket} apiRequest={(params) => this.apiRequestAllTicket(params)} />
              </Card>
            </Col>
          </Row>
        </div>
        {/* <Card bordered={true}>
              <TableComp columns={columnsUnassTicket} apiRequest={(params) => this.apiRequestUnassTicket(params)} />
          </Card>

          <Card bordered={true}>
              <TableComp columns={columnsAllTicket} apiRequest={(params) => this.apiRequestAllTicket(params)} />
          </Card> */}
      </PageHeaderWrapper>)

  }
}


const mapStateToProps = ({ global }) => ({
  categories: global.categories,
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnassignedTickets)
