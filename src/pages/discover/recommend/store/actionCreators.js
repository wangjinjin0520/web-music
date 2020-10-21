import * as actionTypes from './constants';

import {
  getTopBanners
} from '@/servers/recommend'

//todo：真正更改topBanners， dispatch（action对象）
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

//todo:提交一个异步请求Action，通过redux-thunk实现了可以dispatch（函数）
//  这个函数中发送了异步请求，并在异步请求后再次dispatch
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
};