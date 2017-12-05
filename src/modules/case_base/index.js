export default {
    components: {},
    data () {
        return {
            product: [],

            changestyle:0,

            msg:0

        };
    },
    created() {
        this.getdata();

    },
    mounted(){

    },
    destroyed() {

    },  methods: {
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
        setscroll(parpm){
            var distop=""+parpm;
            var  disTop=document.getElementById(distop).offsetTop;
            console.log(disTop);
            document.getElementById("right").scrollTop=disTop-257;
            this.changestyle=parpm;

        },

    }
}

