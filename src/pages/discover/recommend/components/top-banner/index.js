import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';
import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  //从store中获取topBanners
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();
  const bannerRef = useRef();
  //发送获取topBanners的请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  //其他业务逻辑
  //通过向服务器请求小图片减少消耗，加快响应
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  /*说明：useCallback在什么时候使用?
   *场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.*/
  const afterCarouselChange = useCallback((current) => {
    //current此时是topBanners的下标
    setCurrentIndex(current);
  }, [setCurrentIndex])

  return (
    <BannerWrapper bgImage={bgImage} className="test">
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" ref={bannerRef} afterChange={afterCarouselChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => {
            bannerRef.current.prev()
          }}></button>
          <button className="btn right" onClick={e => {
            bannerRef.current.next()
          }}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

