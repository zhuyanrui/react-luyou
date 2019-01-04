import Login from '../containers/login'    //放的都是路由
import Home from '../containers/home'
import Music from '../containers/music'
import Rank from '../containers/music/rank'
import Detail from '../containers/music/detail'
import Registry from '../containers/registry'

const Routes=[{
    path:'/home',
    component:Home
},{
    path:'/login',
    component:Login
},{
    path:'/registry',
    component:Registry
},{
    path:'/music',
    component:Music,
    children:[{
        path:'/music/rank',
        component:Rank,
        children:[{
            path:'/music/rank/detail',
            component:Detail
        }]
    }]
}]
export default Routes;