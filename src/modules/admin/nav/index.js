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
            }
        },'withCredentials');

    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        auth(){
            _.ajax({
                url: '/user/getuserinfo',
                method: 'POST',
                success: function (res) {
                    let _menus = res.menus?res.menus:[];

                    let backgroundRight =false;
                    _menus.forEach(m=>{
                        let menusid =m.split(':')[2];
                        switch(menusid){
                            case "systembackground":
                                backgroundRight =true;
                                break;
                        }
                    });

                    if(!backgroundRight){
                        this.$router.push('/');
                    }
                }
            },'withCredentials');
        },
        goback(){
           if(this.allowBack){
               window.history.back();
           }
        },
        gohome(){
            this.$router.push("/");
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
        }
    },
    watch: {
        $route(){
        }
    }
}