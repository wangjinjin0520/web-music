import React from "react";
import { Redirect } from "react-router-dom";
const Discover = React.lazy(() => import("../pages/discover"));
const Recommend = React.lazy(() => import("../pages/discover/recommend"));
const Album = React.lazy(() => import("../pages/discover/album"));
const Ranking = React.lazy(() => import("../pages/discover/ranking"));
const Songs = React.lazy(() => import("../pages/discover/songs"));
const Djradio = React.lazy(() => import("../pages/discover/djradio"));
const Artist = React.lazy(() => import("../pages/discover/artist"));
const Player = React.lazy(() => import("../pages/discover/player"));


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    ),
    // component:Discover  //这样也可以重定向
    //一般重定向会用在导航栏的默认导航项上
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },

];

export default routes;