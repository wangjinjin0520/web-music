import request from './request';

//todo:走马灯图片
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}
//todo：热门推荐歌单
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}
//todo：新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

//todo:榜单数据
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}