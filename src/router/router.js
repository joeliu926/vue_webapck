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
var casecontrol = r => require.ensure([], () => r(require('../modules/casecontrol/index.vue')), 'casecontrol'); //
var consultdashboard = r => require.ensure([], () => r(require('../modules/consultdashboard/index.vue')), 'consultdashboard');
var caselibrary = r => require.ensure([], () => r(require('../modules/caselibrary/index.vue')), 'caselibrary');
var casedetail = r => require.ensure([], () => r(require('../modules/casedetail/index.vue')), 'casedetail');
var triage = r => require.ensure([], () => r(require('../modules/triage/index.vue')), 'triage');
var case_base = r => require.ensure([], () => r(require('../modules/case_base/index.vue')), 'case_base');
/*const  aComponent=["login","nav","customers","home","test"];
var  oComponent={};
aComponent.forEach(function (item,index) {
    oComponent[item]= r => require.ensure([], () => r(require('../modules/'+item+'/index.vue')), item);
});*/
var admin_clinic = r => require.ensure([], () => r(require('../modules/admin/clinic/index.vue')), 'case_base');
var edit_clinic = r => require.ensure([], () => r(require('../modules/admin/clinic/editclinic/index.vue')), 'editclinic');
var admin_doctor = r => require.ensure([], () => r(require('../modules/admin/doctor/index.vue')), 'admin_doctor');
var doctor_edit = r => require.ensure([], () => r(require('../modules/admin/doctor/editdoctor/index.vue')), 'doctor_edit');
var doctor_detail = r => require.ensure([], () => r(require('../modules/admin/doctor/doctordetail/index.vue')), 'doctor_detail');

var admin_nav = r => require.ensure([], () => r(require('../modules/admin/nav/index.vue')), 'case_base');
var admin_tree = r => require.ensure([], () => r(require('../modules/admin/tree/index.vue')), 'case_base');

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
            name:'/case_base',
            path: '/case_base',
            components:{
                default:case_base,
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
            name:'/casecontrol',
            path:'/casecontrol/:diagid',
            components:{
                default:casecontrol
            }
        },
        {
            name:'/consultdashboard',
            path:'/consultdashboard',
            components:{
                default:consultdashboard,
                nav:nav
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
            name:'/caselibrary',
            path: '/caselibrary/:id',
            components:{
                default:caselibrary,
                 nav:nav
            }
        },
        {
            name:'/casedetail',
            path: '/casedetail/:id',
            components:{
                default: casedetail,
                nav:nav
            }
        },
        {
            name:'/triage',
            path: '/triage/list',
            components:{
                default: triage,
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
        },
        {
            name:'/admin/clinic',
            path: '/admin/clinic',
            components:{
                default:admin_clinic,
                nav:admin_nav
            }
        },
        {
            name:'/admin/clinic/edit',
            path: '/admin/clinic/edit',
            components:{
                default:edit_clinic,
                nav:admin_nav
            }
        },
        {
            name:'/admin/doctor',
            path: '/admin/doctor',
            components:{
                default:admin_doctor,
                nav:admin_nav
            }
        },
        {
            name:'/admin/doctor/edit',
            path: '/admin/doctor/edit',
            components:{
                default:doctor_edit,
                nav:admin_nav
            }
        },
        {
            name:'/admin/doctor/detail',
            path: '/admin/doctor/detail',
            components:{
                default:doctor_detail,
                nav:admin_nav
            }
        }
    ]
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