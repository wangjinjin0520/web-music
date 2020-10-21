import React, { memo , Suspense} from 'react';
import routes from './router';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default memo(function App() {

  return (
    <Provider store={store}>
      {/*renderRoutes内部帮助渲染了很多的Switch，外层一定要用router包裹*/}
      {/*组件外部一定要用HashRouter或者BrowserRouter包裹*/}
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})
