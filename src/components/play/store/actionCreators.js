import * as actionTypes from './constants';

import { getSongDetail } from '@/servers/player'

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


//todo 1.获取歌曲详情
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    let playList = getState().getIn(['player', 'playList']);
    const songIndex = playList.findIndex(song => song.id === ids);

    if (songIndex !== -1) {//歌曲已经在播放列表中了，直接将当前的播放index置为songIndex
      dispatch(changeCurrentSongIndex(songIndex));

    } else {//歌曲不在播放列表，重新请求并加到列表末尾
      getSongDetail(ids).then(res => {
        let newPlayList = [...playList];
        let song = res.songs&&res.songs[0];
        newPlayList.push(song);
        dispatch(changePlayList(newPlayList));
        dispatch(changeCurrentSongIndex(newPlayList.length - 1));
        dispatch(changeCurrentSong(song))
      })
    }
  }
}