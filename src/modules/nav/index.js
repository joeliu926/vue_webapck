/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {},
    data () {
        return {show:false,
            selectedVal:'首页',
            menusList:[],
            userImage:'',
            allowBack:false,
            defaultPic:require("../../common/img/icon-customer.png"),
            backgroundRight:false,
            clinicName:'',
            userName:'',
            name:''
        };
    },
    created() {
        let _this = this;
        _.ajax({
            url: '/user/getuserinfo',
            method: 'POST',
            success: function (res) {
                _this.name = res.name;
                _this.clinicName = res.clinicName?res.clinicName:'欢迎使用哈罗美云！';
                _this.userName=res.loginName;
                let _menus = res.menus?res.menus:[];
                _this.userImage = res.headImgUrl;


                let fitlerarray  = [];
                _menus.forEach(m=>{
                    let menusid =m.split(':')[2];


                    if(fitlerarray.indexOf(menusid)!=-1)
                    {
                        return;
                    }
                    fitlerarray.push(menusid);

                    switch(menusid){
                        case "home":
                            let _mehome ={index:0,id:menusid,name:'首页',url:'/'};
                                _this.menusList.push(_mehome);
                            break;
                        case "customer":
                            let customers ={index:0,id:menusid,name:'联系人中心',url:'/customers'};
                                _this.menusList.push(customers);
                            break;
                        case "consultdashboard":
                            let consultdashboard ={index:0,id:menusid,name:'咨询台',url:'/consultdashboard'};
                                _this.menusList.push(consultdashboard);
                            break;
                        case "kb":
                            let case_base ={index:0,id:menusid,name:'案例中心',url:'/case_base'};
                                _this.menusList.push(case_base);
                            break;
                        case "triage":
                            let triage ={index:0,id:menusid,name:'分诊中心',url:'/triage/list'};
                                _this.menusList.push(triage);
                            break;
                        case "systembackground":
                            _this.backgroundRight =true;
                            break;
                    }
                });
                _this.menusList.sort(function (a,b) {
                    return a.index>b.index;
                });




            }
        },'withCredentials');


    },
    mounted(){
        this.setDefaultRoute();
    },
    destroyed() {

    },
    methods: {
        setdropdown(params){
            let _this =this;
            switch(params){
                case 'out':
                    this.show=false;
                    break;
                case 'over':
                    //setTimeout(function () {
                        _this.show=true;
                    //},10);
                    break;
                case 'lazyout':
                   // setTimeout(function () {
                        _this.show=false;
                   // },10);
                    break;
            }
        },
        changeshow(){
            if (this.show==false){
                this.show=true
            }else{
                this.show=false
            }
        },
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
            }else if(cmd=="backmanage"){
                _This.$router.push("/admin/userlist");
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