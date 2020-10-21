import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { dicoverMenu } from "@/common/local-data";
import {
  DiscoverWrapper,
} from './style';

export default memo(function Discover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="discoverLink wrap-v1">
        {dicoverMenu.map((item)=>{
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>)
        })}
      </div>
      <div>woshiyigezhu </div>
      {/*{renderRoutes(route.routes)}*/}
    </DiscoverWrapper>
  )
})

