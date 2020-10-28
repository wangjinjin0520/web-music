import React, { memo } from 'react';

import {
  ThemeHeaderWrapper
} from "./style";

export default memo(function ThemeHeader(props) {
  const {title,recommendType} = props;

  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            recommendType&&recommendType.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <a href="#/">{item.title}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderWrapper>
  )
})

