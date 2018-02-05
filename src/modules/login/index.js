/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
var rsaService = require('node-rsa');
export default {
    components: {

    },
    data () {
     return{
         sName:"",
         sPassword:"",
         alertPhone:false,
         alertPassword:false,
         alertWaring:false,
     }
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        clearwaring($event,value){
            this.alertWaring = false;
            this.alertPhone = false;
            this.alertPassword = false;
        },
        fLogin(){
            let _this  = this;
            let sUName=_this.sName.trim();
            let sUPassword=_this.sPassword.trim();
            if(sUName==""){
                _this.alertPhone = true;
                _this.alertWaring = false;
                return false;
            }
            if(sUPassword==""){
                _this.alertPassword = true;
                _this.alertWaring = false;
                return false;
            }
            let clientKey = new rsaService({b: 512});
            _.ajax({
                url: '/api/getPublicKey',
                method: 'POST',
                success: function (res) {
                    if (res && res.publickey) {
                        clientKey.importKey(res.publickey);
                        let un = clientKey.encrypt(sUName, 'base64');
                        let pd = clientKey.encrypt(sUPassword, 'base64');
                        _.ajax({
                            url: '/user/login/entry',
                            method: 'POST',
                            data:{
                                name:un,
                                password:pd
                            },                                                 
                            success: function (res) {
                                // console.log("==========>>>>>",res);
                                if(res.code==0) {
                                    _this.$router.push("/");
                                    console.log('99999999999')
                                }else {
                                    _this.alertWaring = true;
                                    _this.alertPhone = false;
                                    _this.alertPassword = false;
                                }
                            }
                        },'withCredentials');
                    }
                }
            },'withCredentials');
        },
        fMessageBox(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定',
            });
        }

    }
}