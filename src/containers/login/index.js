import React from 'react'
import styles from './login.less'
import {
  Form, Icon, Input, Button, Checkbox, notification
} from 'antd'

import Request from '../../request'
import { showLoader, hideLoader } from '../../modules/actions'

import { push } from 'connected-react-router'
import { connect } from 'react-redux'

class NormalLoginForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props
    e.preventDefault()


    this.props.form.validateFields(async (err, values) => {
      if (!err) {

        // dispatch(userActions(values))
        console.log("qawdcqa");
        dispatch(showLoader())

        let x = await Request.login(values)

        console.log('sd', x)
        dispatch(hideLoader())

        if (!x.error) {

          localStorage.setItem('token', x.token)
          localStorage.setItem('user', JSON.stringify(x.user))

          dispatch({
            type: 'SET_CURRENT_USER',
            user: x.user
          })

          setTimeout(() => {
            dispatch(push('/'))
          }, 300)

        } else {
          notification.error({
            message: 'Invalid Login',
            description: x.message
          })

        }
      }
    })

  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { loading } = this.props
    return (
      <Form onSubmit={this.handleSubmit} className={styles.main}>
        <Form.Item>
            {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your 10 digit mobile no!' }]
          })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email address"/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                   placeholder="Password"/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.forgot} href="">Forgot password</a>
          <Button type="primary" loading={loading} htmlType="submit" className={styles.button}>
            Log in
          </Button>
          {/*Or <a href="">register now!</a>*/}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)


const mapStateToProps = ({ counter, global }) => ({
  count: counter.count,
  loading: global.buttonLoading
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm)
