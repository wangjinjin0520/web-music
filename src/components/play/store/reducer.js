import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0 循环 1 随机 2 单曲

});

function reducer(state = defaultState, action) {
  // console.log(action)
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);

    default:
      return state;
  }
}

export default reducer;