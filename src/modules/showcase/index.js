/**
 * Created by JoeLiu on 2017-9-15.
 */
export default {
    components: {

    },
    data () {
        return{
            tvState:'noconnect',//noconnect  waiting  playing connected error
            conCode:0,
            currentTime:_.date2String(new Date(),'hh:mm'),
            timeCount:'',
            conCodeDisplay:[0,0,0,0,0,0],
            picObje:{code:'0',caseName:'客户案例',beforeUrl:'https://27478500.qcloud.la/serverpic/default_before.jpg',afterUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg'}
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

        var ws = new WebSocket("ws://172.16.6.54:8053/tv");

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
                    console.log('result',result);
                    _this.picObje.beforeUrl =result.content.beforeUrl;
                    _this.picObje.afterUrl =result.content.afterUrl;
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
    }
}