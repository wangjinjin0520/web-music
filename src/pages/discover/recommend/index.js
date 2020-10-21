import React, { memo } from 'react';

import TopBanner from './components/top-banner'
import {
  RecommendWrapper
} from './style'

export default memo(function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
    </RecommendWrapper>
  )
})

