import React, { Component } from 'react'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import { TableComp } from 'sz-react-utils'
import {
  Table,
  Badge,
  Card,
  Tooltip,
  notification,
  Switch,
  Input, Button, Icon
} from 'antd'
import Request from '../../../request'
import Color from 'color'
import _ from 'lodash'
import Highlighter from 'react-highlight-words'
// import styles from './styles.less'
import { connect } from 'react-redux'
import memoizeOne from 'memoize-one'
import update from 'immutability-helper'
import { getUrlPushWrapper } from '../../../routes'
import moment from 'moment'

class previousAttendance extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  
  apiRequest = (params, columns) => {
    return new Promise(async (resolve) => {
      let data = await Request.previousAttendance({ ...params, regExFilters: ['empName'] })
      console.log(data, "000000000")
      resolve({data})
    })
  }

  render() {
    const columns = [
      {
        title: 'empName',
        key: 'empName',
        dataIndex: 'empName',
      },
      {
        title: 'empId',
        key: 'empId',
        dataIndex: 'empId',
      },
      {
        title: 'attendance',
        key: 'attendance',
        dataIndex: 'attendance',
      }
      
      
    ]
    
    return (
      <PageHeaderWrapper
        title={'Admin previous attendances'}>

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
)(previousAttendance)