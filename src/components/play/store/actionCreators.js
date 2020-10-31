import * as actionTypes from './constants';

import { getSongDetail, getLyric } from '@/servers/player'

import { parseLyric } from '@/utils/lrc-parse'

export const changePlayList = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

//todo 通过更换歌曲index改变歌曲的播放顺序
export const changeCurrentSong = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const changeCurrentSongIndex = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

export const changeCurrentLyrics = (currentLyrics) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyrics
})

export const changePlaySequence = (playSequence) => ({
  type: actionTypes.CHANGE_CURRENT_PLAY_SEQUENCE,
  playSequence:playSequence % 3
})

export const changeCurrentLyricIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

//todo 获取歌曲详情（播放按钮）
//直接点击列表歌曲播放按钮的情况
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    let playList = getState().getIn(['player', 'playList']);
    const songIndex = playList.findIndex(song => song.id === ids);
    if (songIndex !== -1) {//歌曲已经在播放列表中了，直接将当前的播放index置为songIndex
      //更改currentSongIndex
      dispatch(changeCurrentSongIndex(songIndex));
      //更改currentSong
      dispatch(changeCurrentSong(playList[songIndex]));
    } else {//歌曲不在播放列表，重新请求并加到列表末尾
      getSongDetail(ids).then(res => {
        let newPlayList = [...playList];
        let song = res.songs && res.songs[0];
        newPlayList.push(song);
        //添加歌曲到播放列表
        dispatch(changePlayList(newPlayList));
        //播放当前歌曲（列表最后一个）更改CurrentSongIndex
        dispatch(changeCurrentSongIndex(newPlayList.length - 1));
        //更改CurrentSong
        dispatch(changeCurrentSong(song))
      })
    }
    getLyric(ids).then(res => {
      //歌词分片处理
      const lyricString = res.lrc.lyric;
      const lyrics = parseLyric(lyricString);
      dispatch(changeCurrentLyrics(lyrics));
    })
  }
}

//todo 更换当前播放歌曲（上下切换曲目）
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取当前的index
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playSequence = getState().getIn(["player", "playSequence"]);
    const playList = getState().getIn(["player", "playList"]);
    //2.判断当前播放列表（顺序，随机，单曲）
    switch (playSequence) {
      case 1:
        let index = currentSongIndex;
        while(index === currentSongIndex) {
          index = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = index;
        break;
      default:
        currentSongIndex = (currentSongIndex + tag) % playList.length
    }
    //3.改变currentSongIndex
    dispatch(changeCurrentSongIndex(currentSongIndex));
    //4.改变currentSong
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSong(currentSong));
    //5.获取歌词,
    getLyric(currentSong.id).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeCurrentLyrics(lyrics));
    });
  }
}