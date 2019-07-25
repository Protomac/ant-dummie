import { push } from 'connected-react-router'
import _ from 'lodash'
import Path from 'path-parser'

import Dashboard from './containers/dashboard'
import Undercons from './containers/undercons'
import AllCust from './containers/customers/all'
import AddCust from './containers/customers/add'
import AllUsers from './containers/users/all'
import AddUsers from './containers/users/add'
import allTickets from './containers/ticketList'
import UnasssignedTickets from './containers/unassignedTickets'

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
      'user'
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
      }
    ]
  },
  {
    'path': '/customers',
    'name': 'Customers',
    'icon': 'user',
    'key': 'customers',
    'component': Undercons,
    'authority': [
      'admin',
      'user'
    ],
    'children': [
      {
        'path': '/customers/add',
        'name': 'Add Customer',
        'title': 'Add Customer',
        'component': AddCust
      },
    ]
  },
  {
    'path': '/tickets',
    'name': 'Tickets',
    'icon': 'tickets',
    'key': 'tickets',
    'component': Undercons,
    'authority': [
      'admin',
      'user'
    ],
    'children': [
      {
        'path': '/allTickets',
        'name': 'All Tickets',
        'icon': 'tickets',
        'key': 'allTicket',
        'component': allTickets,
        'authority': [
          'admin',
          'user'
        ]
      },
      {
        'path': '/unassignedTickets',
        'name': 'Unassigned Tickets',
        'icon': 'tickets',
        'key': 'unassignedTickets',
        'component': UnasssignedTickets,
        'authority': [
          'admin',
          'user'
        ]
      },
    ]
  },
  
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

