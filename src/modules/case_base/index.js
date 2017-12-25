export default {
    components: {},
    data () {
        return {
            product: [],
            changestyle:1001,
            msg:0
        };
    },
    created() {
        this.getdata();

    },
    mounted(){

    },
    destroyed() {

    }, 
    methods: {
        getdata(){
            let _This = this;
            let uid= _This.$route.params.id;

            let postData = {
                id: uid
            };
            _.ajax({
                url: '/case_base/getdata',
                method: 'POST',
                data: postData,

                success: function (result) {
                    console.log('result.data',result);
                    if (result.code == 0 && result.data) {
                        _This.product = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        setscroll(params){
            var distop=""+params;
            var  disTop=document.getElementById(distop).offsetTop;
           // console.log(disTop);
            document.getElementById("right").scrollTop=disTop-256;
            this.changestyle=params;

        },
        onscorllevent(params){
            this.product.forEach(m=>{

                var disTop=document.getElementById(m.productCode).offsetTop;

                var scrolltop = document.getElementById("right").scrollTop;

                if(disTop<scrolltop+350&&disTop>scrolltop-350){
                    this.changestyle=  m.productCode;
                }

                //console.log('disTop',disTop);
                //console.log('scrolltop',scrolltop);
                //parentCode
            })
        },
        fCaselibrary(uid){
            if(!uid){
                return false;
            }
            this.$router.push({path:'/caselibrary/'+uid});
        }

    }
}

