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
import Password from 'antd/lib/input/Password';

// inputSchema.fields




@Form.create()
class AddEmployee extends PureComponent {
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
        label: 'Gender',
        key: 'gender',
        type: 'select',
        options: ['Male','Female','Others','Prefer not to say'],
        onChange: (gender)=>{
          this.props.form.setFieldsValue({gender});
        },
        required: true
      },
      {
        label: 'Department',
        key: 'department',
        type: 'select',
        options: ['Maintenance','Engineering','IT','Research & Development'],
        onChange: (department)=>{
          this.props.form.setFieldsValue({department});
        },
        required: true
      },
      {
        label: 'User type',
        key: 'check',
        type: 'select',
        options: ['admin','emp'],
        onChange: (check)=>{
          this.props.form.setFieldsValue({check});
        },
        required: true
      },
      {
        label: 'Email',
        key: 'emailId',
        required: true
      },
      {
        label: 'Password',
        key: 'password',
        type:'password',
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
        label: 'Joining date',
        key: 'joiningDate',
        type:'date',
        required: true,
      },
      {
        label: 'Paid Leave',
        key: 'PL',
        type:'number',
      },
      {
        label: 'Casual Leave',
        key: 'CL',
        type:'number',
      },
      {
        label: 'Seek Leave',
        key: 'SL',
        type:'number',
      },
      {
        label: 'Unpaid Leave',
        key: 'UL',
        type:'number',
      }
    ]
  }
  handleSubmit = e => {
    const { dispatch, form } = this.props
    e.preventDefault()
    
    form.validateFieldsAndScroll(async (err, valData) => {
      if (!err) {

        dispatch(showLoader())
        if(valData.PL) valData.allottedLeave.PL = valData.PL
        if(valData.UL) valData.allottedLeave.PL = valData.UL
        if(valData.CL) valData.allottedLeave.PL = valData.CL
        if(valData.SL) valData.allottedLeave.PL = valData.SL
        delete valData.PL
        delete valData.CL
        delete valData.SL
        delete valData.UL
         
        console.log(valData);
        let x = await Request.addEmployee(valData)

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

    return (
      <PageHeaderWrapper
        title={'Add employee details'}
        content={'Add employee details'}
      >

        <Card bordered={true}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>

            <GetAllFormFields inputSchema={this.inputTypes} formItemLayout={formItemLayout}
                              getFieldDecorator={getFieldDecorator}/>

            <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
              
              <Button type="primary" htmlType="submit" loading={this.props.loading}>
                Add
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployee)
