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
  Input, Button, Icon,Row,Col
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

class empDashboard extends Component {

    state={
      data:{}
    }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  
  apiRequest = (params, columns) => {
    return new Promise(async (resolve) => {
      let data = await Request.empDashboard({ ...params, regExFilters: ['LeaveType'] })
      console.log(data, "000000000")
     this.setState({
        data:{...data}
      })
      resolve(data)
    })
  }

  render() {
    const columns = [
      {
        title: 'LeaveType',
        key: 'LeaveType',
        searchTextName: 'LeaveType',
        dataIndex: 'LeaveType',
      },
      {
        title: 'reason',
        dataIndex: 'reason',
        key: 'reason',
        searchTextName: 'reason',
        search: 'reason'
      },
      {
        title: 'dateFrom',
        dataIndex: 'dateFrom',
        key: 'dateFrom',
        searchTextName: 'dateFrom',
        search: 'dateFrom',
        render:(val,result)=>{
          return <div>{moment(val).format('LL')}</div>
        }
      },
      {
        title: 'dateTo',
        dataIndex: 'dateTo',
        key: 'dateTo',
        searchTextName: 'dateTo',
        search: 'dateTo',
        render:(val,result)=>{
          return <div>{moment(val).format('LL')}</div>
        }
      },
      {
        title: 'status',
        dataIndex: 'status',
        key: 'status'
      }
    ]
    
    return (
      <PageHeaderWrapper
        title={'All Tickets'}>
          <Row >
            <Col span={12}>
                 <Card>
                 {console.log(this.state.data&& this.state.data.allLeaves&& this.state.data.allLeaves.pl)}
                 <h2>PRESENT LEAVES</h2>
                 <h1> PAID LEAVES:{this.state.data&& this.state.data.allLeaves&& this.state.data.allLeaves.pl}
                 </h1>
                 <h1> SICK LEAVES:{this.state.data&& this.state.data.allLeaves&& this.state.data.allLeaves.sl}
                 </h1><h1> CASUAL LEAVES:{this.state.data&& this.state.data.allLeaves&& this.state.data.allLeaves.cl}
                 </h1>
                 <h1> UNPAID LEAVES TAKEN:{this.state.data&& this.state.data.allLeaves&& this.state.data.allLeaves.ul}
                 </h1>
                 </Card>
            </Col>
            <Col span={12}>
                        <Card>
                              <h2>STATUS OF CURRENT LEAVES</h2>
                              <h1>
                                LEAVE DATE:
                                {moment(this.state.data&& this.state.data.entity&& this.state.data.entity.dateFrom       
                              ).format('DD-MM-YYYY')}
                              </h1>
                              <h1>
                                TYPE:
                              {this.state.data&& this.state.data.entity&& this.state.data.entity.LeaveType}        
                              </h1>
                              <h1>
                              STATUS:
                              {this.state.data&& this.state.data.entity&& this.state.data.entity.status}        
                              </h1>
                        </Card>
            </Col>
          </Row>
        <Card bordered={true}>
          <h2>PAST LEAVES</h2>
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
)(empDashboard)