import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader'
import { connect } from 'react-redux'
import GridContent from './GridContent'
import styles from './index.less'
import MenuContext from '../../layouts/MenuContext'
import { goBack } from 'connected-react-router'

const PageHeaderWrapper = ({ children, contentWidth, wrapperClassName, dispatch, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <MenuContext.Consumer>
      {value => (
        <PageHeader
          goBack={() => {
            dispatch(goBack())
          }}
          wide={contentWidth === 'Fixed'}
          home={'Home'}
          {...value}
          key="pageheader"
          {...restProps}
          linkElement={Link}
          itemRender={item => {
            return item.title
          }}
        />
      )}
    </MenuContext.Consumer>
    {children ? (
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
)

const mapStateToProps = ({ theme }) => ({
  contentWidth: theme.contentWidth
})
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeaderWrapper)
