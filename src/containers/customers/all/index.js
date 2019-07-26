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
import styles from './styles.less'
import { connect } from 'react-redux'
import memoizeOne from 'memoize-one'
import update from 'immutability-helper'
import { getUrlPushWrapper } from '../../../routes'

class AllUsers extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  apiRequest = (params) => {
    return new Promise(async (resolve) => {
      let data = await Request.getAllUser(params)
      resolve(data)
    })
  }

  render () {
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
)(AllUsers)
