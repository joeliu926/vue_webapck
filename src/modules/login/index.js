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




            if(this.sName==""){
                this.alertPhone = true;
                this.alertWaring = false;
                return false;
            }
            if(this.sPassword==""){
                this.alertPassword = true;
                this.alertWaring = false;
                return false;
            }


            let clientKey = new rsaService({b: 512});

            let _this  = this;
            _.ajax({
                url: '/api/getPublicKey',
                method: 'POST',
                success: function (res) {
                    if (res && res.publickey) {
                        clientKey.importKey(res.publickey);


                        let un = clientKey.encrypt(_this.sName, 'base64');
                        let pd = clientKey.encrypt(_this.sPassword, 'base64');

                        _.ajax({
                            url: '/user/login/entry',
                            method: 'POST',
                            data:{
                                name:un,
                                password:pd
                            },
                            success: function (res) {
                                if(res.code==0) {
                                    window.location.href="/";
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