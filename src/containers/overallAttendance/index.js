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
import moment from 'moment'

class overallAttendance extends Component {

    state={
            data:{}
    }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.apiRequest();
    }
  
  apiRequest = (params, columns) => {
    return new Promise(async (resolve) => {
      let data = await Request.overallAttendance({ ...params, regExFilters: ['empId'] })
      console.log(data, "000000000")
      this.setState({
          data:{...data}
      })
      resolve(data)
    })
  }

  render() {
    
    return (
      <PageHeaderWrapper
        title={'overallAttendance'}>

<Card>
    <h1>
        PRESENT DAYS:{this.state.data && this.state.data.data}
    </h1>
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
)(overallAttendance)