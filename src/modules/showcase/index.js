/**
 * Created by JoeLiu on 2017-9-15.
 */
export default {
    data () {
        return{
            tvState:'playing',//noconnect  waiting  playing connected error
            conCode:0,
            currentTime:_.date2String(new Date(),'hh:mm'),
            timeCount:'',
            changing:true,
            conCodeDisplay:[0,0,0,0,0,0],
            picObjF1:{class:'show-case fade-in', visible:true,code:'0',caseName:'客户案例',beforeUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg',afterUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg'},
            picObjF2:{class:'show-case fade-none',visible:false,code:'0',caseName:'客户案例',beforeUrl:'https://27478500.qcloud.la/serverpic/default_before.jpg',afterUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg'}
        }
    },
    created() {
        let _this=this;

        //Time Count
        let startTime = new Date();
        setInterval(function () {
            _this.currentTime = _.date2String(new Date(),'hh:mm');
            let passTime =new Date(new Date()-startTime-28800000);
            _this.timeCount =  _.date2String(passTime,'hh:mm:ss');
        },1000);

        var ws = new WebSocket("ws://localhost:8053/tv");

        //Connection to server opened
        ws.onopen = function (e) {
        }

        //dispose the message after got it
        ws.onmessage = function (e) {
            let result = JSON.parse(e.data);
            switch (result.type){
                case 'connected':
                    _this.conCode = result.content.code;
                    _this.conCodeDisplay = result.content.code.toString().split('');
                    break;
                case 'bind_return':
                    if(result.content.code==0){
                        _this.tvState ='connected'
                        setTimeout(function () {
                            _this.tvState ='waiting';
                        },2000);
                    }
                    break;
                case 'sbind_return':
                    if(result.content.code==0){
                        _this.tvState ='waiting';
                    }
                    break;
                case 'image':
                    _this.changeimages(result.content);
                    _this.tvState ='playing';
                    break;
                case 'closed':
                    _this.tvState ='waiting';
                    break;
                case 'delete':
                    _this.tvState ='error';
                    break;
            }
        }
        ws.onclose = function (e) {
            _this.tvState = 'noconnect';
        }
        ws.onerror = function() {
            _this.tvState = 'error';
        }
    },
    destroyed() {
    },
    methods: {
        changeimages(params){
            this.changing =true;
            let _this =this;
            if(this.picObjF1.visible){
                this.picObjF2.class ='show-case fade-in';
                this.picObjF2.beforeUrl= params.beforeUrl;
                this.picObjF2.afterUrl= params.afterUrl;
                this.picObjF2.visible = true;
                this.picObjF1.class ='show-case fade-out';
                this.picObjF1.visible = false;
            }
            else{
                this.picObjF1.class ='show-case fade-in';
                this.picObjF1.visible = true;
                this.picObjF1.beforeUrl= params.beforeUrl;
                this.picObjF1.afterUrl= params.afterUrl;
                this.picObjF2.class ='show-case fade-out';
                this.picObjF2.visible = false;
            }
            setTimeout(function () {
             _this.changing =false;
             },1000);
        }
    }
}