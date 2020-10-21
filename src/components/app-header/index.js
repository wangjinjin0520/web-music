import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';

import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";
import { headerLinks } from "@/common/local-data";

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style.js'

export default memo(function HYAppHeader() {

  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {/*这里的link是不同的展示类型，前三个是路由，后面几个是链接跳转*/}
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input size="large" className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <a className="login-link">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
)
})
