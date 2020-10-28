import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector , shallowEqual} from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from 'antd'
import ThemeHeader from '@/components/theme-header'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'
import { NEW_ALBUM_LIMIT } from '@/common/contants'

export default memo(function NewAlbum() {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);

  const pageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeader title={'新碟上架'}></ThemeHeader>
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                          return <AlbumCover key={iten.id}
                                             info={iten}
                                             size={100}
                                             width={118}
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})

