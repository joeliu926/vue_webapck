/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {},
    data () {
        return {};
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {

        goback(){

            this.$router.push("/customers");
        },
        gohome(){

            this.$router.push("/customers");
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
            console.log("click----" + cmd);
        },
        fLoginOut(cmd){
            let _This=this;
            console.log("----click----");
            console.log(cmd);
            console.log(_.ajax);
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

    }
}