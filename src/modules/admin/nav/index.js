/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {},
    data () {
        return {
            selectedVal:'首页',
            menusList:[],
            userImage:'',
            allowBack:false,
            defaultPic:require("../../../common/img/icon-customer.png"),

        };
    },
    created() {
        let _this = this;
        _.ajax({
            url: '/user/getuserinfo',
            method: 'POST',
            success: function (res) {
                let _menus = res.menus?res.menus:[];
                _this.userImage = res.headImgUrl;
                _menus.forEach(m=>{
                    let menusid =m.split(':')[2];
                    switch(menusid){
                        case "home":
                            _this.menusList.push({index:0,id:menusid,name:'首页',url:'/'});
                            break;
                        case "customer":
                            _this.menusList.push({index:1,id:menusid,name:'联系人中心',url:'/customers'});
                            break;
                        case "consultdashboard":
                            _this.menusList.push({index:2,id:menusid,name:'咨询台',url:'/consultdashboard'});
                            break;
                        case "kb":
                            _this.menusList.push({index:4,id:menusid,name:'案例中心',url:'/case_base'});
                            break;
                        case "triage":
                            _this.menusList.push({index:3,id:menusid,name:'分诊中心',url:'/triage/list'});
                            break;
                    }
                });
                _this.menusList.sort(function (a,b) {
                    return a.index>b.index;
                })
            }
        },'withCredentials');


    },
    mounted(){
        this.setDefaultRoute();
    },
    destroyed() {

    },
    methods: {
        goback(){
           if(this.allowBack){
               window.history.back();
           }
            //this.$router.push("/customers");
        },
        gohome(){
            this.$router.push("/");
        },
        incustomers(){
            this.$router.push("/customers");
        },
        intest(){
            this.$router.push("/test");
        },
        inhome(){
            this.$router.push("/home");
        },
        fChooseItem(cmd){
            //this.selectedVal = cmd;
            this.$router.push(cmd);
        },
        fLoginOut(cmd){
            let _This=this;
            if (cmd == "loginout") {
                _.ajax({
                    url: '/user/loginout/entry',
                    method: 'POST',
                    data: {},
                    success: function (result) {
                        _This.$router.push("/login");
                    }
                }, 'withCredentials');
            }

        },
        setDefaultRoute(){
            if(this.$route.path.indexOf('customer')>=0){
                this.selectedVal = "联系人中心";
            }else if(this.$route.path.indexOf('consultdashboard')>=0){
                this.selectedVal = "咨询台";

            }else if(this.$route.path.indexOf('casecontrol')>=0){
                this.selectedVal = "咨询台";
            }else if(this.$route.path.indexOf('case')>=0){
                this.selectedVal = "案例中心";
            }else if(this.$route.path.indexOf('triage')>=0){
                this.selectedVal = "分诊中心";
            }else {
                this.selectedVal = "首页";
            }
        }
    },
    watch: {
        $route(){
           this.setDefaultRoute();
            /* let aRoute=["/","/customers","/consultdashboard","/triage/list","/case_base"];
                if(aRoute.indexOf(this.$route.path)>=0){
                  this.allowBack=false;
                     }else {
                     this.allowBack=true;
             }*/
            this.allowBack=true;
            this.menusList.forEach(item=>{
                if(item.url==this.$route.path){
                    this.allowBack=false;
                }
            });
        }
    }
}