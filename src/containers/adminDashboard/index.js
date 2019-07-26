import React, { Component } from 'react'
import PageHeaderWrapper from '../../components/PageHeaderWrapper'
import { TableComp } from 'sz-react-utils'
import {
  Table,
  Badge,
  Card,
  Tooltip,
  notification,
  Switch,
  Input, Button, Icon, Row, Col
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

class adminDash extends Component {

  state = {
    data:{}
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  apiRequest = (params, columns) => {
    return new Promise(async (resolve) => {
      let data = await Request.adminDashboard({ ...params, regExFilters: ['empName'] })
      console.log(data, "000000000")
      this.setState({
        data: {...data}
      })
      console.log(this.state.data)
      resolve(data)
    })
  }

  render() {
    const columns = [
      {
        title: 'empName',
        key: 'empName',
        searchTextName: 'empName',
        dataIndex: 'empName',
      },
      {
        title: 'empId',
        key: 'empId',
        dataIndex: 'empId',
      },
      {
        title: 'dateFrom',
        dataIndex: 'dateFrom',
        key: 'dateFrom',
        render: (val, result) => {
          return <div>{moment(val).format('LL')}</div>
        }
      }
      ,
      {
        title: 'dateTo',
        dataIndex: 'dateTo',
        key: 'dateTo',
        render: (val, result) => {
          return <div>{moment(val).format('LL')}</div>
        }
      }


    ]

    return (
      <PageHeaderWrapper
        title={'Admin Dashboard'}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <h1>TOTAL EMPLOYEES:{this.state.data.totalKey}</h1>
            </Card>
          </Col>
          <Col span={8}>
          <Card>
          <h1>PRESENT EMPLOYEES:{this.state.data.value && this.state.data.value.presentemp}</h1>
          </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h1>ABSENT EMPLOYEES:{this.state.data.value && (this.state.data.totalKey -  this.state.data.value.presentemp)}</h1>
            </Card>
          </Col>

        </Row>

        <Card bordered={true}>
          <TableComp columns={columns} apiRequest={(params) => this.apiRequest(params, columns)} />
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
)(adminDash)