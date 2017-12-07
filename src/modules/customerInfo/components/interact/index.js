export default {
    components: {},
    data () {
        return {
            selectedVal:'',
            culeList:[],
            currentClue:{name:''}
        }
    },
    created() {
        this.initClue();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
        },
        initClue(){
            let _this=this;
            let uid= _this.$route.params.id;
            let postData = {
                status:1,
                customerId:uid
            };
            _.ajax({
                url: '/customers/culelist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.culeList = result.data.list;
                        _this.currentClue =   _this.culeList[0];
                    }else {
                    }
                }
            }, 'withCredentials');
        },
        changeClue(params){
            this.currentClue =   params;
        }

    }
}