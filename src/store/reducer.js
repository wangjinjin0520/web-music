//这里按照业务功能拆分reducer模块
//再把拆分好reducer模块合成
import { combineReducers } from 'redux-immutable';
//给模块导出的reducer重命名
import { reducer as recommendReducer } from '@/pages/discover/recommend/store';

const combinedReducer = combineReducers({
  recommend: recommendReducer,
});

export default combinedReducer;
