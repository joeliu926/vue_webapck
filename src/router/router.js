/**
 * Created by JoeLiu on 2017-9-15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const login = r => require.ensure([], () => r(require('../modules/login/index.vue')), 'login');
const nav = r => require.ensure([], () => r(require('../modules/nav/index.vue')), 'nav');
const home = r => require.ensure([], () => r(require('../modules/home/index.vue')), 'home');
const test = r => require.ensure([], () => r(require('../modules/test/index.vue')), 'test');

var routerConfig = {
    linkActiveClass: 'active',
    routes: [
        {
            name:'/login',
            path: '/login',
            component:login
        }
        ,
        {
            name:'/home',
            path: '/home',
            components:{
                default:home,
                nav:nav
            }
        }
        ,{
            name:'/test',
            path: '/test',
            components:{
                default:test,
                nav:nav
            }
        }]
}

var router = new VueRouter(routerConfig);

router.beforeEach((to, from, next)=>{


    next();
});

export default router;