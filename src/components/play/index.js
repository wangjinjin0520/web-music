import React, { memo } from 'react';

import PlayerBar from './player-bar'
import PlayerPanel from './player-panel'

import {
  AppPlayerWrapper
} from './style';

export default memo(function Player() {

  return (
    <AppPlayerWrapper >
      <div className="content">
        <PlayerPanel/>
        <PlayerBar/>
      </div>
    </AppPlayerWrapper>
  )
});
