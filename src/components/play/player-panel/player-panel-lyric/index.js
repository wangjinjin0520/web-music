import React, { memo } from 'react';
import { shallowEqual, useSelector } from "react-redux";

import classNames from 'classNames';

import { PlayerPanelLyricWrapper } from './style';

export default memo(function PlayerPanelLyric() {
  const {currentLyrics,currentLyricsIndex} = useSelector(state => ({
    currentLyrics: state.getIn(["player", "currentLyrics"]),
    currentLyricsIndex: state.getIn(["player", "currentLyricIndex"]),
  }),shallowEqual)


  return (
    <PlayerPanelLyricWrapper>
      <div className="lrc-content">
        {
          currentLyrics.map((item, index) => {
            return (
              <div key={item.time}
                   className={classNames("lrc-item", { "active": index === currentLyricsIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PlayerPanelLyricWrapper>
  )
})

