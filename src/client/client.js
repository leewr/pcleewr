import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router'
import routes from '../router'

import configureStore from '../store/index'
import createRouter from '../router/index.js'

// 从页面中获取服务端生产redux数据，作为客户端redux初始值
const store = configureStore(window.__initState__)

let userinfo = getUserInfo(store.getState())

if (!userinfo || !userinfo.id) userinfo = null

const run = async () => {
  const router = createRouter(userinfo)
  const RouterDom = router.dom

  let _route = null

  router.list.some(route => {
    let match = matchPath(window.location.pathname, route)
    if (match && match.path) {
      _route = route
      return true
    }
  })

  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <RouterDom />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
}

run()
