const initialState = {
  currentUser: {
    email: null
  },
  token: null,
  notices: [
    {
      'id': '000000009',
      'title': '任务名称',
      'description': '任务需要在 2017-01-12 20:00 前启动',
      'extra': '未开始',
      'status': 'todo',
      'type': 'event'
    },
    {
      'id': '000000010',
      'title': '第三方紧急代码变更',
      'description': '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      'extra': '马上到期',
      'status': 'urgent',
      'type': 'event'
    },
    {
      'id': '000000011',
      'title': '信息安全考试',
      'description': '指派竹尔于 2017-01-09 前完成更新并发布',
      'extra': '已耗时 8 天',
      'status': 'doing',
      'type': 'event'
    },
    {
      'id': '000000012',
      'title': 'ishaan sharma ',
      'description': '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      'extra': '进行中',
      'status': 'processing',
      'type': 'notification'
    }
  ],
  buttonLoading: false,
  categories: [
    'Information Technology',
    'Education',
    'Finance',
    'E-Commerce',
    'Web Application',
    'Cooperate'
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user
      }

    case 'LOGOUT':
      return {
        ...state,
        currentUser: {}
      }

    case 'SHOW_BTN_LOADING':
      return {
        ...state,
        buttonLoading: true
      }

    case 'HIDE_BTN_LOADING':
      return {
        ...state,
        buttonLoading: false
      }


    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        token: action.token
      }

    default:
      return state
  }
}
