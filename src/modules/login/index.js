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
         sPassword:""
     }
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        fLogin(){
            console.log(this.sName+"------"+this.sPassword);
            if(this.sName==""){
                this.fMessageBox("请输入用户名。");
                return false;
            }
            if(this.sPassword==""){
                this.fMessageBox("请输入密码。");
                return false;
            }
            _.ajax({
                url: '/user/login/entry',
                method: 'POST',
                data:{
                     
                },
                success: function (res) {
                   if(res.code==0) {
                       window.location.href="/";
                   }else {
                       this.fMessageBox("用户名或密码错误。");
                   }
                }
            },'withCredentials');

           /* _.ajax({
                url: '/user/userate',
                method: 'POST',
                data:{
                    "dataCode": 0,
                    "dataType":2
                },
                success: function (res) {
                    window.location.href="/";

                }
            });*/
        },
        fMessageBox(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定',
            });
        }

    }
}