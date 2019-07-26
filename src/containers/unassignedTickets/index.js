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
import { func } from 'prop-types';

class UnassignedTickets extends Component {

  // constructor(props) {
  //   super(props)
  //   this.
  // }
  state = {
    apiResponse: {
      tickets: [],
      emp: []
    },
    selected: {
      tickets: [],
      empId: null
    }
  }

  componentDidMount() {
    this.apiRequestAllEmp({ check: 'emp' }).then(() => {
      this.apiRequestUnassTicket()

    })
    console.log(this.state)
  }

  apiRequestUnassTicket = (params) => {
    return new Promise(async (resolve) => {
      let data = await Request.getUnassignedTickets({ ...params, regExFilters: ['status', 'title', 'department', 'priority'] })
      console.log(data.data, "000000000")
      this.setState({
        apiResponse: {
          tickets: data.data,
          emp: this.state.apiResponse.emp
        }
      })
      resolve(data.data)
    })
  }

  apiRequestAllEmp = (params) => {
    return new Promise(async (resolve) => {
      let data = await Request.getAllEmployees({ ...params, regExFilters: ['emailId', 'empId'] })
      console.log(data.data, "000000000")
      this.setState({
        apiResponse: {
          emp: data.data
        }
      })
      resolve(data.data)
    })
  }

  assignToEmp = (params) => {
    return new Promise(async (resolve) => {
      const data = {
        array: (this.state.selected.tickets && this.state.selected.tickets.map((key)=> key._id)),
        updates :{empId : (this.state.selected.empId && this.state.selected.empId)}
      }
      console.log(data)
      let update = await Request.updateData({...data})
      this.apiRequestUnassTicket();
      console.log(update, this.state)
      resolve()
    })
  }

  render() {
    const columnsUnassTicket = [
      {
        title: 'S',
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
        filters: [
          {
            text: 'low',
            value: 'low'
          },
          {
            text: 'medium',
            value: 'medium'
          },
          {
            text: 'high',
            value: 'high'
          },
        ],
        onFilter: (value, record) => record.priority.indexOf(value) === 0,
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
      tickets: {
        type: 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${typeof selectedRowKeys}`, 'selectedRows: ', selectedRows);
          let temp = []
          selectedRows.map((element) => {
            temp.push(element._id)
          })
          let selected = {...this.state.selected}
          selected.tickets = selectedRows
          console.log(selected)
          this.setState({selected},( element) => {
          console.log(this.state)

          }) 
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      },
      emp: {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRow) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRow);
          this.setState({
            selected: {
              ...this.state.selected,
              empId: selectedRow[0].empId
            }
          }, ()=>{
            console.log(this.state.selected)
          })
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      }
    }

    return (
      <PageHeaderWrapper
        title={'Unassigned Tickets'}>
        <div>
          <Row>
            <Col span={16}>
              <Card bordered={true}>
                {/* <TableComp rowSelection={rowSelection} columns={columnsUnassTicket} apiRequest={(params) => this.apiRequestUnassTicket(params)} /> */}
                <Table rowSelection={rowSelection.tickets} columns={columnsUnassTicket} dataSource={this.state.apiResponse.tickets} />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={true}>
                <Button type='primary' onClick={this.assignToEmp}>Assign</Button>
                <Table rowSelection={rowSelection.emp} columns={columnsAllTicket} dataSource={this.state.apiResponse.emp} />
                {/* <TableComp rowSelection={{type: 'radio'}} columns={columnsAllTicket} apiRequest={(params) => this.apiRequestAllEmp(params)} /> */}
              </Card>
            </Col>
          </Row>
        </div>
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
