var constant = require('../../common/utils/constants');
export default {
    components: {

    },
    data () {
     return{
         aAutoSelect:[],//模糊搜索下拉
         faceDiagnoseRemarks:"",//原因（复诊和放弃时使用）
         faceDiagnoseDate:"",//面诊时间（复诊使用）
         faceDiagnoseProduct:"",//面诊成功项目（成功时使用）
         isConScreanItem:false,
         isCurrentProject:"0",
         isDocProject:"0",
         isSelectItem:false,
         dialogVisible:false,
         activeStatus:"0",
         cstProjects: ['鼻子整形', '脸部整形', '下巴整形', '其他整形','哈哈哈哈'],
         routerParam:{},
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
        //_This.fTimer();



        _This.routerParam=this.$route.params;

        console.log("options--------->",this.$route.params);


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

        },
        projectFilter:function (input) {
            if(!input||input==""||typeof(input)!="object"){
                return "";
            }
            let result=[];
            input.forEach(item=>{
                result.push(item.projectName);
            });
            return result.join("、");
        }
    },
    mounted(){


    },
    destroyed() {

    },
    methods: {
        fTimer(){
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
        fChangeCheck(){
          console.log("dddddddd--change",this.consultItems);
            this.faceDiagnoseProduct=this.consultItems.join(",");
        },
        /**
         * 下拉框变化
         * @param ename
         * @returns {boolean}
         */
        fChangeAutoSelect(ename){
         if(ename.trim()==""){
             return false;
         }
            let _This=this;
            let postData={
                productName:ename
            };
            _.ajax({
                url: '/product/searchList',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("product result--------",result);
                    if(result.code==0&&result.data){
                      _This.aAutoSelect=result.data;
                    }
                    console.log(" _This.aAutoSelect======>", _This.aAutoSelect);
                }
            }, 'withCredentials');

        },
        /**
         * 结束咨询提交数据
         */
        fSubmitEndData(){
            let _This=this;
            let postData={
                id: _This.routerParam.diagid,
                flag:_This.activeStatus,
                faceDiagnoseRemarks:_This.faceDiagnoseRemarks,
                faceDiagnoseDate:_This.faceDiagnoseDate?_This.faceDiagnoseDate.valueOf():"",
                faceDiagnoseProduct:_This.faceDiagnoseProduct
            };
            console.log("postData======>",postData);
            _.ajax({
                url: '/faceDiagnose/finished',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("fSubmitEndData result--------",result);
                    if(result.code==0&&result.data){

                    }

                }
            }, 'withCredentials');
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