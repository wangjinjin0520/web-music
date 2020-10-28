import React, { memo } from 'react';

import TopBanner from './components/top-banner'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import RecommendRanking from './components/recommend-ranking'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

export default memo(function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          {/*<UserLogin/>*/}
          {/*<SettleSinger/>*/}
          {/*<HotAnchor/>*/}
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

