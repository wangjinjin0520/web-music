import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  currentLyrics:[],  //当前歌曲的歌词
  currentLyricIndex:-1,  //歌词切片后的当前歌词下标
  playSequence: 0, // 0 顺序 1 随机 2 单曲
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);

    case actionTypes.CHANGE_CURRENT_LYRIC:
      return state.set("currentLyrics", action.currentLyrics);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);

    case actionTypes.CHANGE_CURRENT_PLAY_SEQUENCE:
      return state.set("playSequence",action.playSequence)

     default:
      return state;
  }
}

export default reducer;