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
// const {TextArea} = Input
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
import { type } from 'os';
import UniqueIdMixin from 'unique-id-mixin'


class AllTickets extends Component {
    
    state = {
        id:'',
        userInput:{},
        data:[]
    }
   
    componentDidMount() {
        this.apiRequest()
        
    }
    onChange = (event,id)=>{
            var val = event.target.value
             id = event.target.parentNode.parentNode.parentNode.getAttribute('data-row-key')
             console.log(id)
            this.setState({userInput:{[id]:val} })
            console.log(this.state)
    }
    
    apiRequest = async (params, columns)=>{
            // console.log(params)
            let leavelist = await Request.leaveList({...params,status:['under review'], regExFilters:['empId']})
            console.log(leavelist)
            // this.state.data = [...leavelist.data]
            console.log(this.state.data, '000000000000')
            this.setState({data:leavelist.data})          
    }
    apiAction =  (e)=>{
        return new Promise(async (resolve)=>{
            const id = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].innerText
            let innerText = e.target.innerText;
            const input = e.target.parentNode.parentNode.parentNode.getAttribute('data-row-key')
            console.log(input)
            let data = await Request.adminAction(this.state.userInput[input],innerText,id)
            console.log(data,'11111111111111111111')
            resolve(data)
            this.apiRequest()
        })
    }
    
        render() {
            
            
        const style = {
            textAlign:'center', 
            marginLeft:'-10px', 
        }
        const columns = [
            {
                title: 'Emp_Id',
                key: 'empId',
                searchTextName: 'empId',
                dataIndex: 'empId',
                sorterr: true
            },
            {
                title: 'From',
                dataIndex: 'dateFrom',
                key: 'dateFrom',
                searchTextName: 'dateFrom',
                search: 'dateFrom',
                render: (val, record) => {
                    return <div>{moment(val).format('LL')}</div>
                }
            },
            {
                title: 'To',
                dataIndex: 'dateTo',
                key: 'dateTo',
                searchTextName: 'dateTo',
                search: 'dateTo',
                render: (val, record) => {
                    return <div>{moment(val).format('LL')}</div>
                }
            },
            {
                title: 'Leave type',
                dataIndex: 'LeaveType',
                key: 'LeaveType',
                searchTextName: 'LeaveType',
                search: 'LeaveType'
            },
            {
                title: 'Reason',
                dataIndex: 'reason',
                key: 'reason',
                searchTextName: 'Reason',
                search: 'reason'
            },
            {
                title: 'Name',
                dataIndex: 'empName',
                key: 'empName',
                searchTextName: 'empName',
                search: 'empName'
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                searchTextName: 'status',
                search: 'status'
            },
            {
                title: 'Admin Reason',
                dataIndex: 'adminReason',
                key: 'adminReason',
                searchTextName: 'adminReason',
                search: 'adminReason',
                render:()=>{
                    return <div><Input 
                                     
                                placeholder='reason' 
                                onChange={this.onChange}>
                                </Input>
                    
                    </div>
                    
                }
            },
            {
                title:'Action',
                dataIndex: 'action',
                key: 'action',
                searchTextName: 'action',
                search: 'action',
                render: ()=>{
                    return <div><Button 
                                style = {{width:'50%', backgroundColor:'#48C75B', fontWeight:'bold'}}
                                onClick = {this.apiAction}>
                            <Icon  style = {style}/>
                            Accept
                            </Button>
                             <Button 
                             style = {{width:'50%', backgroundColor:'#FF002B', fontWeight:'bold'}}
                             onClick = {this.apiAction}> 
                                 <Icon style = {style}/>Reject
                            </Button>
                        </div>
                    },
                }
        ]
        return (
            <PageHeaderWrapper
                title={'All Leaves'}>

                <Card bordered={true}>
                    <TableComp columns={columns} dataSource={this.state.data}/>
                </Card>

            </PageHeaderWrapper>
                
            )

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
