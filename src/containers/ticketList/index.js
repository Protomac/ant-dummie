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
  Input, Button, Icon
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

class AllTickets extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  apiRequest = (params, columns) => {
    return new Promise(async (resolve) => {
      let data = await Request.getAllTickets({ ...params, regExFilters: ['emailId', "empId"] })
      console.log(data[1], "000000000")

      resolve(data[1])
    })
  }

  render() {
    const columns = [
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
    return (
      <PageHeaderWrapper
        title={'All Tickets'}>

        <Card bordered={true}>
          <TableComp columns={columns} apiRequest={(params) => this.apiRequest(params, columns)} />
        </Card>

      </PageHeaderWrapper>)

  }
}


const mapStateToProps = ({ global}) => ({
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
)(AllTickets)
