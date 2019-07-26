import React, { PureComponent } from 'react'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import {
  Form,
  Select,
  Button,
  Card,
} from 'antd'
import _ from 'lodash'
import moment from 'moment'
import { FormUtils as GetAllFormFields } from 'sz-react-utils'

import 'react-quill/dist/quill.snow.css'
import { notification } from 'antd/lib/index'
import { hideLoader, showLoader } from '../../../modules/actions'
import Request from '../../../request'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

// inputSchema.fields




@Form.create()
class UpdateEmployee extends PureComponent {
  inputTypes = {
    fields: [
      {
        label: 'Employee id',
        key: 'empId',
        type: 'number',
        required: true
      },
      {
        label: 'Full Name',
        key: 'name',
        required: true
      },
      {
        label: 'Email',
        key: 'emailId',
        required: true
      },
      {
        label: 'Address',
        key: 'address',
        required: true,
      },
      {
        label: 'Mobile No.',
        key: 'mobile',
        type: 'number',
        required: true,
      },
      {
        label: 'Salary',
        key: 'salary',
        type:'number',
        required: true,
      },
      {
        label: 'Paid Leave',
        key: 'PL',
        type:'number',
        required: true,
      },
      {
        label: 'Casual Leave',
        key: 'CL',
        type:'number',
        required: true,
      },
      {
        label: 'Seek Leave',
        key: 'SL',
        type:'number',
        required: true,
      },
      {
        label: 'Unpaid Leave',
        key: 'UL',
        type:'number',
        required: true,
      }
    ]
  }
  handleSubmit = e => {
    const { dispatch, form } = this.props
    e.preventDefault()
    
    form.validateFieldsAndScroll(async (err, valData) => {
      if (!err) {

        dispatch(showLoader())
        const {empId,PL,CL,SL,UL} = valData;
        delete valData.PL
        delete valData.CL
        delete valData.SL
        delete valData.UL
        valData.allottedLeave = {PL,CL,SL,UL}
        delete valData.empId;
        console.log(valData);
        let x = await Request.updateEmployee(empId,valData)

        dispatch(hideLoader())

        if (!x.error) {
          notification.success({
            message: x.message
          })
          this.props.form.setFieldsValue({})

        } else {
          notification.error({
            message: 'Error Saving',
            description: x.message
          })
        }

      }
    })
  }

  setFormValues = async (slug) => {

    let { data } = await Request.getWebsite(slug)

    this.setState({
      extraFeilds: data.extraUrls.length
    })

    let x = {
      url: data.url,
      category: data.category,
      tags: data.tags,
      description: data.description,
      baseColor: data.baseColor,
      logoBgColor: data.logoBgColor,
      logoUrl: data.logoUrl,
      projectDate: moment(data.projectDate)
    }

    _.each(data.extraUrls, (val, k) => {
      x[`extraUrl-${k}`] = val
    })

    this.props.form.setFieldsValue(x)

  }

  constructor (props) {
    super(props)
    this.state = {}
    
  }

  render () {

    const {
      form: { getFieldDecorator }
    } = this.props

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 12 }
      }
    }

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
        md: { span: 12, offset: 8 }
      }
    }

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    }
    console.log(this.props);
    return (
      <PageHeaderWrapper
        title={'Update employee details'}
        content={'Update employee details'}
      >

        <Card bordered={true}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>

            <GetAllFormFields inputSchema={this.inputTypes} formItemLayout={formItemLayout}
                              getFieldDecorator={getFieldDecorator}/>

            <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
              
              <Button type="primary" htmlType="submit" loading={this.props.loading}>
                UPDATE
              </Button>
            </Form.Item>

          </Form>
        </Card>

      </PageHeaderWrapper>
    )
  }
}

const mapStateToProps = ({ global, router }) => ({
  loading: global.buttonLoading,
  categories: global.categories,
  search: router.location.search
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateEmployee))
