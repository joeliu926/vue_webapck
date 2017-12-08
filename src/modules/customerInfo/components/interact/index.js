export default {
    components: {},
    data () {
        return {
            selectedVal:'',
            culeList:[],
            currentClue:{name:''},
            webEvent:[],
            sceneEvent:[],
            culeState:0,  // 1,"网络咨询", 2,"现场咨询",3,"恢复中",4,"关闭")
            currentCuleState:0,  // 1,"网络咨询", 2,"现场咨询",3,"恢复中",4,"关闭")
            sessionId:'',
            unionId:''
        }
    },
    created() {
        this.initClue();
        this.unionid  = this.$parent.$parent.$parent.$parent.$parent.oCustomer.unionid;
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
                        if(_this.culeList.length>0){
                            _this.currentClue = _this.culeList[0];
                            _this.culeState = _this.currentClue.phase;
                            _this.sessionId = _this.currentClue.sessionId;

                            console.log('_this.currentClue.phase',_this.currentClue.phase);

                            if(_this.culeState==1){
                                console.log('_this.culeState',_this.culeState);
                                _this.initwebClue();
                            }
                        }
                    }else {
                    }
                }
            }, 'withCredentials');
        },
        changeClue(params){
            this.currentClue =  params;
            this.culeState = this.currentClue.phase;
            this.sessionId = this.currentClue.sessionId;
        },
        initwebClue(){

            let _this=this;

            console.log('this.unionid',this.unionid);
            let postData = {
                unionId: this.unionid ,
                consultingId:_this.sessionId
            };

            console.log('00000000000',postData);
            _.ajax({
                url: '/customers/culewebdetail',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.culeList = result.data.list;
                        if(_this.culeList.length>0){
                            _this.currentClue = _this.culeList[0];
                            _this.culeState = _this.currentClue.phase;
                            _this.openId = _this.currentClue.sessionId;
                        }
                    }else {
                    }
                }
            }, 'withCredentials');
        },
        initSceneClue(){

        }

    }
}