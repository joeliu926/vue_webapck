/**
 * Created by JoeLiu on 2017-9-15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


var login = r => require.ensure([], () => r(require('../modules/login/index.vue')), 'login');
var nav = r => require.ensure([], () => r(require('../modules/nav/index.vue')), 'nav');
var home = r => require.ensure([], () => r(require('../modules/home/index.vue')), 'home');
var test = r => require.ensure([], () => r(require('../modules/test/index.vue')), 'test');
var customers = r => require.ensure([], () => r(require('../modules/customers/index.vue')), 'customers');

/*const  aComponent=["login","nav","customers","home","test"];
var  oComponent={};
aComponent.forEach(function (item,index) {
    oComponent[item]= r => require.ensure([], () => r(require('../modules/'+item+'/index.vue')), item);
});*/

var routerConfig = {
    linkActiveClass: 'active',
    routes: [
        {
            name:'/',
            path: '/',
            components:{
                default:customers,
                nav:nav
            }
        },
        {
            name:'/login',
            path: '/login',
            component:login
        }
        ,
        {
            name:'/customers',
            path: '/customers',
            components:{
                default:customers,
                nav:nav
            }
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
    let path=to.path;

    if(path=='/login'){
        next();
        return;
    }
    next();
    //console.log('ppppppppppp',path)
});

export default router;