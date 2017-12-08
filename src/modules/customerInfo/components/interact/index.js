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
        let _this =this;
        setTimeout(function () {
            _this.initClue();
            _this.unionid  = _this.$parent.$parent.$parent.$parent.$parent.oCustomer.unionid;
        },200);

       /* this.$nextTick(function () {

            this.initClue();
            this.unionid  = this.$parent.$parent.$parent.$parent.$parent.oCustomer.unionid;
        })*/

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
                                _this.initwebClue();
                                _this.currentCuleState =1;
                            }else  if(_this.culeState==2){
                                _this.currentCuleState =2;
                                _this.initwebClue();
                                _this.initSceneClue();
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

            if(this.culeState==1){
                this.initwebClue();
            }else if(this.culeState==2){
                this.initwebClue();
                this.initSceneClue();
            }
        },
        initwebClue(){
            let _this=this;

            let postData = {
                unionId: this.unionid ,
                consultingId:_this.sessionId
            };
            _.ajax({
                url: '/customers/culewebdetail',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.webEvent = result.data;
                        _this.webEvent.trackDesc.forEach(m=>{
                            m.leftTrack.date =_.date2String(new Date(m.leftTrack.date),'yyyy-MM-dd hh:mm');

                            m.rightTrack.trackDetailList.forEach(mr=>{
                                mr.date = _.date2String(new Date(mr.date),'yyyy-MM-dd hh:mm');
                            });
                        });
                    }
                }
            }, 'withCredentials');
        },
        initSceneClue(){

        },
        checkState(params){
            if(params<=this.culeState)
            this.currentCuleState =params;
        },
        getClass(params){
            if(this.currentCuleState==params&&this.culeState>=params)
            {
                return 'state-two';
            }

            if(this.currentCuleState==params&&this.culeState<params)
            {
                return 'state-three';
            }

            if(this.currentCuleState!=params&&this.culeState>=params)
            {
                return 'state-one';
            }

            if(this.currentCuleState!=params&&this.culeState<params)
            {
                return 'state-three';
            }
        }
    }
}