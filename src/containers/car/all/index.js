import React, {Component} from 'react'
import ReactDOM from "react-dom"
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import {
    Drawer,
    Popconfirm,
    Card,
    Tooltip,
    DatePicker,
    Select,
    notification,
    Carousel,
    Switch,
    Upload, Button, Icon
} from 'antd'
import Request from '../../../request'
import Color from 'color'
import moment from 'moment'
import _ from 'lodash'
import {connect} from 'react-redux'
//import styles from './styles.less'
import update from 'immutability-helper'

import {apiUrl} from '../../../settings'

// import { TableComp } from 'sz-react-utils'
import TableComp from '../../../components/_utils/table'
import {getPushPathWrapper, getUrlParams} from '../../../routes'
const {RangePicker} = DatePicker

const Option = Select.Option
class AllCar extends Component {

    state = {
        visible: false,
        loading: false,
        disabled: true,
        uploadData: null,
        totalCar: '',
        media: [],
        allDealers: [],
        visible: false,
        dealerId: '',
        time: {
            key: 'createdAt',
            from: null,
            to: null
        }
    }

    reload = () => {
        this.table.current.reload()
    }

    apiRequest = (params, columns, dealerId) => {
        return new Promise(async (resolve) => {
            let regExFilters = _.map(columns, x => x.key)
            if (!!dealerId) {
                params.dealerId = [dealerId]
            }
            if (this.state.dealerId) {
                params.dealerId = this.state.dealerId
            }
            let data = await Request.getAllCars({...params, regExFilters, dateFilter: this.state.time})
            this.setState({totalCar: data.total})
            resolve(data)
        })
    }

    deleteCars = async ({_id}) => {

        this.setState({loading: true})

        await Request.deleteCar({_id})

        this.setState({loading: false})

        this.reload()

        notification.success({
            message: 'Deleted Successfully',
            duration: 20,
            key: `${_id}-close`
        })

    }


    carImage = async ({_id}) => {

        this.setState({loading: true})

        let {media} = await Request.carImage({_id})
        this.setState({media: media})
        this.setState({loading: false})

        this.reload()


    }


    constructor(props) {
        super(props)
        this.table = React.createRef()
    }


    async componentWillMount() {

        let data = await getUrlParams('cars.dealercars', this.props.pathname)
        if (data && data.id) {
            this.setState({
                dealerId: data.id
            }, () => {
                this.reload()
            })
        }

        let {data: allDealers} = await Request.getAllDealers({count: 10000})
        this.setState({
            allDealers
        })
    }

    chooseRangerPicker = (date, dateString) => {
        this.setState({
            time: {
                key: 'createdAt',
                from: date[0],
                to: date[1]
            }
        }, () => {
            this.reload()

        })


    }


    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        const {dispatch} = this.props
        const {
            visible, disabled, loading, dealerId, allDealers, media
        } = this.state
        const columns = [
            {
                title: 'CarName',
                key: 'make.name',
                sorter: true,
                dataIndex: 'make.name',
                searchTextName: 'make',
                filterRegex: true,
                fixed: 'left'
            },
            {
                title: 'CarModel',
                key: 'model.name',
                sorter: true,
                dataIndex: 'model.name',
                searchTextName: 'model',
                filterRegex: true
            },
            {
                title: 'FuelType',
                key: 'fuelType.name',
                sorter: true,
                dataIndex: 'fuelType.name',
                searchTextName: 'fuel',
                filterRegex: true
            }, {
                title: 'Variant',
                key: 'variant',
                sorter: true,
                dataIndex: 'variant.name',
                searchTextName: 'variant',
                filterRegex: true
            },
            {
                title: 'DealerName',
                key: 'name',
                sorter: true,
                dataIndex: 'dealerId',
                searchTextName: 'name',
                filterRegex: true,
                render: (val, record) => {
                    return (<div>{record.dealerId ? record.dealerId.dealershipName : ''}</div>)

                }
            },

            {
                title: 'Price',
                key: 'price',
                sorter: true,
                dataIndex: 'price',
                searchTextName: 'price',
                filterRegex: true
            },
            {
                title: 'RegNo',
                key: 'regNo',
                sorter: true,
                dataIndex: 'regNo',
                searchTextName: 'regNo',
                filterRegex: true
            },
            {
                title: 'ManufactureYear',
                key: 'manufactureYear',
                sorter: true,
                dataIndex: 'manufactureYear',
                searchTextName: 'manufactureYear',
                filterRegex: true
            },
            {
                title: 'Km',
                key: 'km',
                sorter: true,
                dataIndex: 'km',
                searchTextName: 'km',
                filterRegex: true
            },
            {
                title: 'Created_At',
                key: 'createdAt',
                sorter: true,
                dataIndex: 'createdAt',
                searchTextName: 'createdDate',
                filterRegex: true,
                render: (val, record) => {
                    return (<div>{record.createdAt ? moment(record.createdAt).format('DD-MMM-YYYY') : ''}</div>)
                }
            },
            {
                key: 'actions',
                title: 'Actions',
                show: false,
                width: 100,
                fixed: 'right',
                render: (val) => {
                    return <div>

                        <Tooltip title="Edit Details">
                            <Button shape="circle" onClick={() => {
                                dispatch(getPushPathWrapper('cars.editMake', {id: val._id}))
                            }} icon="edit"/>
                        </Tooltip>
                        <Tooltip title="View Car">
                            <Button shape="circle" onClick={async () => {
                                await    this.carImage(val)

                                this.setState({
                                    visible: true,
                                });

                            }} icon="car"/>

                        </Tooltip>

                        <Tooltip title="Delete Car">
                            <Popconfirm title="Are you sure delete this Car?" onConfirm={() => {
                                this.deleteCars(val)
                            }} onCancel={() => {
                                console.log()
                            }} okText="Yes" cancelText="No">
                                <Button type="danger" shape="circle" icon="delete"/>
                            </Popconfirm>

                        </Tooltip>
                    </div>

                }
            }
        ]


        return (
            <PageHeaderWrapper
                title={`All Cars : ${this.state.totalCar}`}>


                <Card style={{marginBottom: 10}}>
                    <div style={{display: "flex"}}>
                        <h4 style={{margin: 5}}>FILTER BY LAST UPDATE</h4>
                        <RangePicker
                            showTime={{format: 'HH:mm'}}
                            format="YYYY-MM-DD HH:mm"
                            placeholder={['Start Time', 'End Time']}
                            onChange={this.chooseRangerPicker}
                            onOk={this.onOk}
                        />
                        <h4 style={{
                            margin: 5,
                            marginLeft: 10
                        }}>SEARCH BY DEALER</h4>
                        <Select
                            showSearch
                            allowClear
                            style={{width: 200}}
                            value={this.state.dealerId}
                            placeholder='Select Dealer'
                            onChange={(dealer) => {
                                this.setState({dealerId: dealer.toString()}, () => {

                                    this.table.current.reload()

                                })
                            }}

                            filterOption={(input, option) => {
                                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }}
                        >
                            {
                                allDealers.map((val, idn) => {
                                    return (
                                        <Option key={idn} value={val._id}>{val.dealershipName}</Option>
                                    )
                                })
                            }

                        </Select>
                    </div>


                </Card>

                <Card bordered={true}>
                    <TableComp ref={this.table} columns={columns}
                               extraProps={{loading, scroll: {x: 1000}}}
                               apiRequest={(params) => this.apiRequest(params, columns, dealerId)}/>
                </Card>

                <Drawer
                    title="Car Images"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <div><Carousel >
                        {media.map((v, k) => {
                            return <div key={k}>
                                <img style={{width: '100%'}} src={v.url}/>
                            </div>
                        })}


                    </Carousel></div>

                </Drawer>

            </PageHeaderWrapper>)

    }

}


const mapStateToProps = ({global, router}) => ({
    categories: global.categories,
    pathname: router.location.pathname,

})
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllCar)
