import React, { memo } from 'react';

import PlayerPanelHeader from './player-panel-header'
import PlayerPanelList from './player-panel-list'
import PlayerPanelLyric from './player-panel-lyric'

import {PlayerPanelWrapper} from './style'

export default memo(function PlayerPanel() {
  return (
    <PlayerPanelWrapper>
      <PlayerPanelHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <PlayerPanelList/>
        <PlayerPanelLyric/>
      </div>
    </PlayerPanelWrapper>
  )
})

