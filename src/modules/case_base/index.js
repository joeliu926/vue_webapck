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
        this.$nextTick(function () {
            window.addEventListener("scroll", this.onscorllevent);
        })
    },
    destroyed() {
        window.removeEventListener("scroll", this.onscorllevent);
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
                    //console.log('result.data',result);
                    if (result.code == 0 && result.data) {
                        _This.product = result.data;
                        _This.changestyle= result.data[0].productCode;
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
            document.documentElement.scrollTop=disTop-256;
            this.changestyle=params;

        },
        onscorllevent(params){
            this.product.forEach(m=>{

                var disTop=document.getElementById(m.productCode).offsetTop;

                var scrolltop = document.documentElement.scrollTop;

                if(disTop<scrolltop+350&&disTop>scrolltop-250){
                    this.changestyle=  m.productCode;
                }
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

