var constant = require('../../common/utils/constants');
export default {
    components: {

    },
    data () {
     return{
         isConScreanItem:false,
         isCurrentProject:"0",
         isDocProject:"0",
         isSelectItem:false,
         dialogVisible:false,
         activeStatus:"success",
         endProjects: ['鼻子整形', '脸部整形', '下巴整形', '其他整形','哈哈哈哈'],
         otheritems:"",
         otherresion:"",
         bookdate:"",
         consultItems:[],
         customerName:"",
         customerinfoP:false,
         gender:0,
         birthday:"",
         dCurrentDate:"",
         sTimer:"00:00:00",
         dTimer:0,
         imgdata: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1],
         //socket
         conCode:0,
         conSid:'',
         webSocket:null,
         conCodeList:[{id:0,val:''},{id:1,val:''},{id:2,val:''},{id:3,val:''},{id:4,val:''},{id:5,val:''}]
     }
    },
    created() {
        let _This=this;
        setInterval(function(){
            _This.dCurrentDate=new Date();
            let temTimer=_This.dTimer;
            _This.dTimer=temTimer+1;
            let nSec=temTimer%60+"";
            let nMin =parseInt(temTimer/60)%60+"";
            let nHour = parseInt(temTimer/3600)%60+"";
            let sSec=nSec[1]?nSec:("0"+nSec);
            let sMin=nMin[1]?nMin:("0"+nMin);
            let sHour=nHour[1]?nHour:("0"+nHour);
            _This.sTimer=sHour+":"+sMin+":"+sSec;
        },1000);

        this.initSocket();
    },
    filters:{
        dateFilter:function(input) {
            if(input&&input!=""){
                let sDes="上午";
                let ihour=input.getHours();
                if(ihour>=12){
                    sDes="下午";
                }
                return sDes+_.date2String(new Date(input),"hh:mm");
            }
        },
        dateTimer:function(input){

        }
    },
    mounted(){


    },
    destroyed() {

    },
    methods: {
        fLogin(){
        },
        fSelectItems(){

        },
        fCloseSelect(){//关闭选择
            console.log("close   data");
            let _This=this;
            _This.isSelectItem=false;
        },
        fChooseItems(e){//选择项目

            let _This=this;
             let dataSet=e.target.dataset;
            console.log(dataSet);
            _This.isCurrentProject= dataSet.itemcode;
            _This.isSelectItem=true;

        },
        fChooseDoc(e){//选择医生
            let dataSet=e.target.dataset;
            console.log(dataSet);
            let _This=this;
            _This.isSelectItem=true;
            _This.isDocProject= dataSet.doccode;
        },
        fEndConsult(){//结束咨询
            let _This=this;
            _This.dialogVisible = true;
        },
        fChangeTab(e){
            let _This=this;
            let dataSet=e.target.dataset;
            _This.activeStatus=dataSet.tabtype;
        },
        fCloseEnddialog(){
            let _This=this;
            _This.dialogVisible = false;
        },
        fCloseCustomerInfo(){
            this.customerinfoP=true;
        },
        fOpenCustomerInfo(){
            this.customerinfoP=false;
        },
        fConnectDevice(){
            this.isConScreanItem=true;
        },
        fCloseConBox(){
            this.isConScreanItem=false;
        },
        initSocket(){
            if(window.localStorage){
                this.conCode = localStorage.getItem("rky_mc_conCode");
            }else{
                alert('This browser does NOT support localStorage');
            }

            this.webSocket = new WebSocket(`${constant.wsReqUrl}console`);

            let _this =this;

            this.webSocket.onmessage = function (e) {
                let result = JSON.parse(e.data);
                switch (result.type){
                    case 'connected':
                        _this.conSid = result.content.sid;
                        break;
                    case 'bind_return':
                        break;
                    case 'sbind_return':
                        if(result.content.code==0){
                            
                        }
                        break;
                }
            }
        },
        inputConCode(params){
            if(params==5){
                this.fCloseConBox();
                let _sconCode = '';
                this.conCodeList.forEach(m=>{
                    _sconCode+= m.val;
                });
                this.conCode =parseInt(_sconCode);
                localStorage.setItem("rky_mc_conCode",this.conCode);
                let bindObj = {"type":"bind","content":{"code":this.conCode,"sid":this.conSid}};
                this.webSocket.send(JSON.stringify(bindObj));
            }else{
                document.getElementById('codeid_'+(params+1)).focus();
            }
        }
    }
}