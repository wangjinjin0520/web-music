import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';

import { message } from 'antd';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
  PlayBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function PlayerBar() {

  const [playStatus, setPlayStatus] = useState(0)   //0暂停  1播放
  const [currentTime, setCurrentTime] = useState(0)   // 播放进度条的时间(ms)
  const [currentProcess, setCurrentProcess] = useState(0)   // 播放进度条的时间(0-100)
  const [isSliding, setIsSliding] = useState(false)   // 是否滑动进度条

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual);

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const songName = currentSong.name || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");    //歌曲总时间
  const showCurrentTime = formatDate(currentTime, "mm:ss");   //歌曲已经播放的时间

  const dispatch = useDispatch();
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong])

  //音乐的播放与停止
  const playMusic = () => {
    let status = !playStatus;
    setPlayStatus(status);
    status ? audioRef.current.play() : audioRef.current.pause();
  }

  //音乐播放进度条更新的回调函数
  const timeUpdate = (e) => {
    // console.log(e.target.currentTime)  //这个currentTime是秒
    setCurrentTime(e.target.currentTime * 1000);
    //在滑动slide过程中不会回弹到原时间
    if(!isSliding){
      let process = currentTime / duration * 100;   //(ms/ms * 100)
      setCurrentProcess(process)
    }
  }
  //当前歌曲播放结束的回调函数(下一首)
  const handleMusicEnded = () => {

  }

  //slide滑动，更新currentTime。并且更新过程中
  //在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理
  //value:0-100 slider值
  const sliderChange = useCallback((value) => {
    setIsSliding(true);
    let currentTime = value / 100 * duration;   //(百分比 * 总时长<ms>) 需要ms  （这里ms）
    // audioRef.current.currentTime = currentTime / 1000;   //音乐audio时间进度(audio需要s)
    setCurrentTime(currentTime);   //用于format的展示时间，是ms
    setCurrentProcess(value);
  }, [duration]);


  const sliderAfterChange = useCallback((value) => {
    setIsSliding(false);
    let currentTime = value / 100 * duration;   //(百分比 * 总时长<ms>)
    audioRef.current.currentTime = currentTime / 1000;   //音乐audio时间进度
    setCurrentTime(currentTime);
    setCurrentProcess(value);
    if (!playStatus) {
      playMusic();
    }
  }, [playStatus, playMusic]);


  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control playStatus={playStatus}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={() => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt=""/>
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider value={currentProcess}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>

      {/* ref 本身需要 .current才能拿到 dom 元素*/}
      <audio ref={audioRef}
             onTimeUpdate={e => timeUpdate(e)}
             onEnded={() => handleMusicEnded()}
      />
    </PlayBarWrapper>
  )
});