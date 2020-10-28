import React, { memo, useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from "react-redux"

import ThemeHeader from '@/components/theme-header'
import TopRanking from '@/components/top-ranking'
import { RecommendRankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators';

export default memo(function RecommendRanking(props) {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RecommendRankingWrapper>
      <ThemeHeader title={'榜单'} />
      <div className="tops">
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RecommendRankingWrapper>
  )
})

