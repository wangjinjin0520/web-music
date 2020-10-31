import React, { memo } from 'react';
import { useDispatch, useSelector ,shallowEqual} from 'react-redux';

import {message} from 'antd'
import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction ,changePlayList } from '../play/store/actionCreators';
import { TopRankingWrapper } from './style'

export default memo(function TopRanking(props) {

  const { info } = props;
  const { tracks = [] } = info;
  const {playList} = useSelector(state => ({
    playList: state.getIn(["player", "playList"])
  }),shallowEqual);

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  }
  const addMusicToList = (item)=>{
    //判断是否已经在播放列表中
    //在列表中：不在添加
    //不在列别中：添加到末尾
    let hasItem = playList.indexOf(item);
    if(hasItem === -1){
      let newPlayList = [...playList,item]
      dispatch(changePlayList(newPlayList));
    }else{
      message.warn('该曲目已经在播放列表中')
    }
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={()=>playMusic(item.id)}></button>
                    <button className="btn sprite_icon2 addto" onClick={()=>addMusicToList(item)}></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

