

export default {
    components: {},
    data () {
        return {
            selectedVal:'诊所知识库'
        };
    }
     ,
     created() {

     },
    // mounted(){
    //     this.setDefaultRoute();
    // },
     destroyed() {

     },
    // methods: {
    //     goback(){
    //         window.history.back();
    //         //this.$router.push("/customers");
    //     },
    //     gohome(){
    //         this.$router.push("/");
    //     },
    //     incustomers(){
    //         this.$router.push("/customers");
    //     },
    //     intest(){
    //         this.$router.push("/test");
    //     },
    //     inhome(){
    //         this.$router.push("/home");
    //     },
    //     fChooseItem(cmd){
    //         //this.selectedVal = cmd;


    //         switch(cmd){
    //             case "首页":
    //                 this.$router.push("/");
    //                 break;
    //             case "客户中心":
    //                 this.$router.push("/customers");
    //                 break;
    //             case "案例中心":
    //                 this.$router.push("/customers");
    //                 break;
    //             case "咨询中心":
    //                 this.$router.push("/customers");
    //                 break;
    //         }
    //     },
    //     fLoginOut(cmd){
    //         let _This=this;
    //         console.log("----click----");
    //         console.log(cmd);
    //         console.log(_.ajax);
    //         if (cmd == "loginout") {
    //             _.ajax({
    //                 url: '/user/loginout/entry',
    //                 method: 'POST',
    //                 data: {},
    //                 success: function (result) {
    //                     _This.$router.push("/login");
    //                 }
    //             }, 'withCredentials');
    //         }

    //     },
    //     setDefaultRoute(){
    //         if(this.$route.path.indexOf('customer')>=0){
    //             this.selectedVal = "客户中心";

    //         }else{
    //             this.selectedVal = "首页";
    //         }
    //     }
    // },
    // watch: {
    //     $route(){
    //        this.setDefaultRoute();

    //     }
    // }
}