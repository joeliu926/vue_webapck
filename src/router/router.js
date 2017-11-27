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
var consultdata = r => require.ensure([], () => r(require('../modules/consultdata/index.vue')), 'consultdata');
var customerinfo = r => require.ensure([], () => r(require('../modules/customerInfo/index.vue')), 'customerinfo');
var showcase = r => require.ensure([], () => r(require('../modules/showcase/index.vue')), 'showcase');

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
                default:consultdata,
                nav:nav
            }
        },
        {
            name:'/login',
            path: '/login',
            component:login
        },
        {
            name:'/customers',
            path: '/customers',
            components:{
                default:customers,
                nav:nav
            }
        },
        {
            name:'/consultdata',
            path: '/consultdata',
            components:{
                default:consultdata,
                nav:nav
            }
        },
        {
            name:'/customerinfo',
            path: '/customerinfo/:id',
            components:{
                default:customerinfo,
                nav:nav
            }
        },
        {
            name:'/showcase',
            path:'/showcase',
            components:{
                default:showcase
            }
        },
        {
            name:'/home',
            path: '/home',
            components:{
                default:home,
                nav:nav
            }
        },
        {
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

    console.log('path',path);
    if(path=='/showcase'){
        next();
        return;
    }else if(path=='/login'){
        next();
        return;
    }else{
        let _this =this;
        _.ajax({
            url: '/user/checkloginstate',
            method: 'POST',
            success: function (res) {
                if(res.code==0){
                    next();
                }
                else{
                    return next({path:'/login'});
                }
            }
        },'withCredentials');
    }
});

export default router;