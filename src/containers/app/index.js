import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import memoizeOne from 'memoize-one'

import menuData, { getUrlPath } from '../../routes'
import Exception from '../../components/Exception'
import AuthLayout from '../../layouts/AuthLayout'
import BasicLayout from '../../layouts/BasicLayout'
import Login from '../../containers/login'
import '../../index.css'
import _ from 'lodash'
import { pageTitle } from '../../settings'

const Exp = () => (<Exception
  type="404"
  desc={'You Seems lost !!'}
  linkElement={Link}
  redirect={'/dashboard'}
  backText={'Go To Homepage?'}
/>)
const Exp403 = () => (<Exception
  type="403"
  desc={'Sorry You Don\'t have access to this area !!'}
  linkElement={Link}
  redirect={'/dashboard'}
  backText={'Go To Homepage?'}
/>)

class BasicLayoutWrapper extends Component {
  render () {

    const { menuData, component, path } = this.props

    let user = (localStorage.getItem('user') != 'undefined') ? JSON.parse(localStorage.getItem('user')) : null

    if (!user) {
      return (<Redirect to="/login"/>)
    }

    let menuItem = _(menuData)
      .thru(function(coll) {
        return _.union(coll, _.map(coll, 'children'))
      })
      .flatten()
      .find({ 'path': path })

    if (menuItem.authority !== undefined && menuItem.authority.indexOf(user.userType) === -1) {
      console.log('this user should not be here ', path)
      return <Exp403/>
    }

    if (!menuItem.title) {
      menuItem.title = 'Untitled'
    }
    // console.log(menuItem)

    return (
      <BasicLayout

        location={window.location}
        title={pageTitle}
        pageTitle={`${menuItem.title} - Scizers Portfolio App`}
        menuData={menuData}>
        {!!component ? <this.props.component/> : <Exp/>}
      </BasicLayout>)
  }
}

class App extends Component {

  constructor (props) {

    super(props)
    this.state = {
      token: localStorage.getItem('token'),
      user: (localStorage.getItem('user') != 'undefined') ? JSON.parse(localStorage.getItem('user')) : null,
      test: 'mohit'
    }
    
    
  }

  render () {

    const { user } = this.state
    return (
      <div>
        

        <Route exact path="/form/basic-formsdf" render={(route) => {
          return (
            this.props.test,
            <div>
              asdfsdf
              {menuData.map((item, key) => {
                // console.log(item.children)
                if (item.children) {
                  return item.children.map((child, k) => {
                    console.log(child.path)
                    return (
                      <div key={item.children}>
                        {child.path}
                      </div>
                    )
                  })
                }
              })}
            </div>
          )
        }}/>

        {menuData.map((item, key) => {

          if (!item.children) {
            return (<Route exact path={item.path} key={item.path} render={(route) => {
              return <BasicLayoutWrapper component={item.component} path={item.path} user={user} menuData={menuData}/>
            }}/>)
          }
        })}

        {menuData.map((item, key) => {
          if (item.children) {
            return item.children.map((child, k) => {
              return (<Route exact path={child.path} key={child.path} render={(route) => {
                return <BasicLayoutWrapper component={child.component} path={child.path} user={user}
                                           menuData={menuData}/>
              }}/>)
            })
          }
        })}

        <Route exact path="/login" render={(route) => {
          return (
            <AuthLayout
              location={window.location}
              menuData={menuData}>
              <Login/>
              
            </AuthLayout>
          )
        }}/>

        <Route exact path="/" render={(route) => {
          return (
            <Redirect to="/dashboard"/>
          )
        }}/>

      </div>)
  }
}

export default App
