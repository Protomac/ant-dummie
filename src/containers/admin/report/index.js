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
    Input, Button, Icon, Row, Col
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
import moment from 'moment';


class AllTickets extends Component {

    state  = {
        data:{}
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.apiRequest()
    }

    apiRequest = (params, columns) => {
        return new Promise(async (resolve) => {
            let data = await Request.employeReport({ ...params, regExFilters: ['empId'] }, '5d37dfd768d04939e0b7ed59')
            console.log(data, "000000000")
            this.setState({data:
                {...data}
            })
            console.log(this.state)
            resolve(data)
            
        })
    }

    render() {
                return (
            <PageHeaderWrapper
                title={'Report'}>
                    <Row >
                        <Col>
                <Card bordered={true}>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Name:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && this.state.data.file.empName}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Admin Reason:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px',textAlign: "center"}}>
                    {this.state.data.file && this.state.data.file.adminReason}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>From:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && moment(this.state.data.file.dateFrom).format('LL')}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>To:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && moment(this.state.data.file.dateTo).format('LL')}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Employee ID:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && this.state.data.file.empId}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Reason:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && this.state.data.file.reason}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Status:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && this.state.data.file.status}
                    </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                    <h1 style={{textAlign: "center", fontSize:'20px'}}>Leave Type:
                    </h1>
                        </Col>
                        <Col span={12}>
                        <p style={{ fontSize:'20px'}}>
                    {this.state.data.file && this.state.data.file.LeaveType}
                    </p>
                        </Col>
                    </Row>                    
                </Card>
                </Col>
                
            </Row>

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
)(AllTickets)
