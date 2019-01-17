import routerList from './list'
export default function (userInfo) {
    console.log(userInfo)
    return routerList
}
import Index from '../pages/Index.js'
export default [
    {
        path: '/',
        component: Index,
        exact: true
    }
]