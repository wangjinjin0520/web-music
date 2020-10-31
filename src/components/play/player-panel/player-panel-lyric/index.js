import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useSelector } from "react-redux";

import classNames from 'classNames';
import { scrollTo } from "@/utils/ui-helper";

import { PlayerPanelLyricWrapper } from './style';

export default memo(function PlayerPanelLyric() {
  const {currentLyrics,currentLyricIndex} = useSelector(state => ({
    currentLyrics: state.getIn(["player", "currentLyrics"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }),shallowEqual)

  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

console.log(currentLyricIndex)
  return (
    <PlayerPanelLyricWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          currentLyrics.map((item, index) => {
            return (
              <div key={item.time + index}
                   className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PlayerPanelLyricWrapper>
  )
})

