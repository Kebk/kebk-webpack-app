import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '@/redux/actions/user'

class UserInfo extends Component {
  render() {
    const { userInfo, loading, errorMsg } = this.props.userInfo
    return (
      <div>
        <div>
          {loading ? (
            '请求信息中......'
          ) : errorMsg ? (
            errorMsg
          ) : (
            <div>
              <p>用户信息：</p>
              <p>用户名：{userInfo.name}</p>
              <p>介绍：{userInfo.intro}</p>
            </div>
          )}
        </div>
        <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
      </div>
    )
  }
}

export default connect(
  state => ({ userInfo: state.userInfo }),
  { getUserInfo }
)(UserInfo)
