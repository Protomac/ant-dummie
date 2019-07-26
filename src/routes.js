import { push } from 'connected-react-router'
import _ from 'lodash'
import Path from 'path-parser'

import Dashboard from './containers/dashboard'
import apply from './containers/applyLeave'
import Undercons from './containers/undercons'
import AllCust from './containers/customers/all'
import AddCust from './containers/customers/add'
import AllUsers from './containers/users/all'
import AddUsers from './containers/users/add'
import empDashboard from './containers/empDashboard'
import employeeData from './containers/employeeData'
import adminDashboard from './containers/adminDashboard'
import previousAttendance from './containers/adminAttendance/previous'
import currentAttendance from './containers/adminAttendance/current'
import overallAttendance from './containers/overallAttendance'


import login from './modules/actions/userActions';
import SaveUsers from './containers/users/save'
import LeaveList from './containers/admin/leavelist'
import Report from './containers/admin/report'
import AddEmployee from './containers/Employee/add'
import UpdateEmployee from './containers/Employee/update'
import AllEmployee from './containers/Employee/delete'


const menu = [
  {
    'path': '/dashboard',
    'name': 'Dashboard',
    'icon': 'dashboard',
    'key': 'dashboard',
    'homepage': true,
    'component': Dashboard,
    'authority': [
      'admin',
      'emp'
    ]
  },
  

    {
      'path': '/dashboard/leavelist',
      'name': 'Leave List',
      'title': 'Leave List',
      'component': LeaveList,
      
    },
    
    {
      'path': '/dashboard/report',
      'name': 'Report',
      'title': 'Reort',
      'component': Report,
      
    },

  {
    'path': '/empDashboard',
    'name': 'empDashboard',
    'icon': 'empDashboard',
    'key': 'empDashboard',
    'component': empDashboard,
    'authority': [
      'admin',
      'user'
    ]
  },
  {
    'path': '/employeeData',
    'name': 'employeeData',
    'icon': 'employeeData',
    'key': 'employeeData',
    'component': employeeData,
    'authority': [
      'admin',
      'user'
    ]
  },
  {
    'path': '/ApplyLeave/5d36aee5ff6af4290c7f2850',
    'name': 'ApplyLeave',
    'icon': 'Apply',
    'key': 'ApplyLeave',
    'homepage': true,
    'component': apply,
    'authority': [
      'admin',
      'user'
    ]
  },
  {
    'path': '/overallAttendance',
    'name': 'overallAttendance',
    'icon': 'overallAttendance',
    'key': 'overallAttendance',
    'component': overallAttendance,
    'authority': [
      'admin',
      'user'
    ]
  },{
    'path': '/adminDashboard',
    'name': 'adminDashboard',
    'icon': 'adminDashboard',
    'key': 'adminDashboard',
    'component': adminDashboard,
    'authority': [
      'admin',
      'user'
    ]
  },
  {
    'path': '/adminAttendance',
    'name': 'adminAttendance',
    'icon': 'adminAttendance',
    'key': 'adminAttendance',
    'component': Undercons,
    'authority': [
      'admin',
      'user'
    ],
    'children': [
      {
        'path': '/adminAttendance/Previous',
        'name': 'previous month',
        'title': ' previous month',
        'component': previousAttendance
      },
      {
        'path': '/adminAttendance/current',
        'name': 'current month',
        'title': 'current month',
        'component': currentAttendance
      }
    ]
  },
  {
    'path': '/users',
    'name': 'Users',
    'icon': 'user',
    'key': 'users',
    'component': Undercons,
    'authority': [
      'admin',
      'user'
    ],
    'children': [
      {
        'path': '/users/add',
        'name': 'Add User',
        'title': 'Add User',
        'component': AddUsers
      },
      {
        'path': '/users/all',
        'name': 'All Users',
        'title': 'All Users',
        'component': AllUsers
      },
      {
        'path':'/users/save',
        'name': "Saved Users",
        'title': 'Saved USers',
        'component': SaveUsers

      }

    ]
  },
  {
    'path': '/employee',
    'name': 'Employee',
    'icon': 'user',
    'key': 'employees',
    'component': Undercons,
    'authority': [
      'admin',
      'user'
    ],
    'children': [
      {
        'path': '/employee/add',
        'name': 'Add Employee',
        'title': 'Add Employee',
        'component': AddEmployee
      },
      {
        'path': '/employee/update',
        'component': UpdateEmployee
      },
      {
        'path': '/employees/',
        'name': 'All Employees',
        'title': 'All Employees',
        'component': AllEmployee
      },
    ]
  }
]

//<editor-fold desc="Functions Exports">
export const getUrlPushWrapper = (keyString, query) => {
  return push(getUrlPath(keyString, query))
}

export const getUrlPath = (keyString, params) => {

  if (!params) params = {}

  let keyArr = keyString.split('.')

  let val = _.find(menu, p => p.key === keyArr[0])

  if (!val) {
    return `/`
  }

  if (keyArr.length === 2) {
    val = _.find(val.children, p => p.key === keyArr[1])
  }

  if (!val) {
    return `/`
  }

  let queryString = Object.keys(params).
    map(key => key + '=' + params[key]).
    join('&')

  return `${val.path}?${queryString}`
}

export const getPushPathWrapper = (keyString, params) => {

  let obj = getUrlObject(keyString)

  if (obj) {
    const path = new Path(obj.path)

    return push(path.build(params))
  }

  return 'error'
}

export const getUrlParams = (keyString, route) => {

  let obj = getUrlObject(keyString)

  if (obj) {
    const path = new Path(obj.path)

    return path.test(route)
  }

  return { error: true }
}

export const getUrlObject = (keyString) => {

  let keyArr = keyString.split('.')

  let val = _.find(menu, p => p.key === keyArr[0])

  if (!val) {
    return `/`
  }

  if (keyArr.length === 2) {
    val = _.find(val.children, p => p.key === keyArr[1])
  }

  if (!val) {
    return `/`
  }

  return val
}
//</editor-fold>

export default menu

