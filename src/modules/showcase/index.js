/**
 * Created by JoeLiu on 2017-9-15.
 */
var constant = require('../../common/utils/constants');
export default {
    data () {
        return{
            tvState:'noconnect',//noconnect  waiting  playing connected error
            conCode:0,
            currentTime:_.date2String(new Date(),'hh:mm'),
            timeCount:'',
            changing:true,
            caseName:'',
            conCodeDisplay:[0,0,0,0,0,0],
            webSocketKeep:null,
            picObjF1:{class:'show-case fade-in', visible:false,code:'0',caseName:'客户案例',beforeUrl:'',afterUrl:''},
            picObjF2:{class:'show-case fade-none',visible:true,code:'0',caseName:'客户案例',beforeUrl:'',afterUrl:''}
        }
    },
    created() {
        let _this=this;

        //Time Count
        let startTime = new Date();
        setInterval(function () {
            let partTime =  new Date().getHours()>12?'下午':'上午';
            _this.currentTime = partTime+_.date2String(new Date(),'hh:mm');
            let passTime =new Date(new Date()-startTime-28800000);
            _this.timeCount =  _.date2String(passTime,'hh:mm:ss');
        },1000);

        let ws = new WebSocket(`${constant.wsReqUrl}tv`);

        //Connection to server opened
        ws.onopen = function (e) {
        }

        this.webSocketKeep= setInterval(function () {
            ws.send(JSON.stringify({type:'keepAlive', content:{}}));
        },30000);

        //dispose the message after got it
        ws.onmessage = function (e) {
            let result = JSON.parse(e.data);
            switch (result.type){
                case 'connected':
                    _this.conCode = result.content.code;
                    _this.conCodeDisplay = result.content.code.toString().split('');
                    _this.tvState ='noconnect';
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
            /*_this.tvState = 'noconnect';*/
            _this.tvState = 'error';
        }
        ws.onerror = function() {
            _this.tvState = 'error';
        }
    },
    destroyed() {
        window.clearInterval(this.webSocketKeep);
    },
    methods: {
        changeimages(params){
            this.changing =true;
            this.caseName = params.caseName;
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