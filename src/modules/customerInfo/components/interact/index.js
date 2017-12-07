export default {
    components: {},
    data () {
        return {
            selectedVal:'',
            culeList:[]
        }
    },
    created() {
        this.changeClue();
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
        changeClue(){
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
                        _this.culeList = result.data;
                        console.log('_this.culeList',_this.culeList);
                    }else {
                    }
                }
            }, 'withCredentials');
        }

    }
}