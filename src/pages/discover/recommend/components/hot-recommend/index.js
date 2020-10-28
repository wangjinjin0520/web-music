import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommendsAction } from '../../store/actionCreators'
import ThemeHeader from "@/components/theme-header";
import SongCover from "@/components/song-cover";
import { recommendType } from '@/common/local-data'
import { HOT_RECOMMEND_LIMIT } from '@/common/contants'
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend() {

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeader title={'热门推荐'} recommendType={recommendType}></ThemeHeader>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SongCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

