

export default {
    components: {},
    data () {
        return {
            msg:0,
           caselist:[],
            judgelength:"您要的案例还在精心准备中！",
        };
    }
     ,
     created() {
        this.getcaselist();


     },
    mounted(){

    },
     destroyed() {

     },filters:{
        //judegdatalenth:function(input){
           // if( this.caselist.length<=0){
            //    return "哎呀，人家还在精心给你准备案呢！";
           // }

        //},
    },
     methods: {
         getcaselist(){
             let _This = this;
             let uid= _This.$route.params.id;
             if(!uid){
                 _This.$router.push('/case_base');
             }
             let postData = {
                 id: uid
             };
             _.ajax({
                 url: '/case_base/caselibrary',
                 method: 'POST',
                 data: postData,

                 success: function (result) {
                    // console.log('caselibrayrresult.data',result);
                     if (result.code == 0 && result.data) {
                         _This.caselist =JSON.parse(JSON.stringify(result.data)) ;
                         console.log('_This.caselist',_This.caselist);
                     }else {
                         //_This.$router.push('/customers');
                     }
                 }
             }, 'withCredentials');
         },

         fCaselibrary(uid){
            // console.log("uid",uid);
             if(!uid){
                 return false;
             }
             this.$router.push({path:'/caselibrary/'+uid});
         },fCaseDetail(id){
             if(!id){
                 return false;
             }
             this.$router.push({path:'/casedetail/'+id});
         }

     }
}