import React, { PureComponent } from 'react'
import { Layout, message } from 'antd'
import Animate from 'rc-animate'
import { connect } from 'react-redux'
import GlobalHeader from '../components/GlobalHeader'
import TopNavHeader from '../components/TopNavHeader'
import styles from './Header.less'

const { Header } = Layout

class HeaderView extends PureComponent {

  state = {
    visible: true
  }

  static getDerivedStateFromProps (props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true
      }
    }
    return null
  }

  handleMenuClick = ({ key }) => {
    const { dispatch } = this.props

    switch (key) {
      case 'logout' :
        dispatch({ type: 'LOGOUT' })
        break
      default:
        console.log(key, ' this is working')

    }

  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handScroll)
  }

  getHeadWidth = () => {
    const { isMobile, collapsed, setting } = this.props
    const { fixedHeader, layout } = {}
    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%'
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)'
  }

  handleNoticeClear = type => {
    message.success('this is ttest message')
    const { dispatch } = this.props

    console.log(type, ' this is working here')
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handScroll, { passive: true })

    let { dispatch } = this.props
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    dispatch({
      type: 'SET_CURRENT_USER',
      user
    })
  }

  handleNoticeVisibleChange = visible => {
    console.log(visible, ' this is worign here ')

  }

  handScroll = () => {
    const { autoHideHeader } = this.props
    const { visible } = this.state
    if (!autoHideHeader) {
      return
    }
    const scrollTop = document.body.scrollTop +
      document.documentElement.scrollTop
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true
          })
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false
          })
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true
          })
        }
        this.oldScrollTop = scrollTop
        this.ticking = false
      })
    }
  }

  render () {
    const { isMobile, handleMenuCollapse, theme } = this.props
    const { navTheme, layout, fixedHeader } = theme
    const { visible } = this.state
    const isTop = layout === 'topmenu'
    const width = this.getHeadWidth()
    const HeaderDom = visible ? (
      <Header style={{ padding: 0, width }}
              className={fixedHeader ? styles.fixedHeader : ''}>
        {isTop && !isMobile ? (
          <TopNavHeader
            theme={navTheme}
            mode="horizontal"
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        ) : (
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        )}
      </Header>
    ) : null
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    )
  }
}

const mapStateToProps = ({ global, theme }) => {
  return ({
    currentUser: global.currentUser,
    notices: global.notices,
    theme
  })
}

export default connect(mapStateToProps, dispatch => {
    return {
      dispatch
    }
  }
)(HeaderView)


