/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

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
            let _this  = this;
            _.ajax({
                url: '/user/login/entry',
                method: 'POST',
                data:{
                    name:this.sName,
                    password:this.sPassword,
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
        },
        fMessageBox(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定',
            });
        }

    }
}