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
         isConScreanItem:false, //连接设备弹出判断
         isCurrentProject:"0", //选择项目索引判断
         isDocProject:"0", //选择对应医生索引判断
         isSelectItem:false, //播放页面图片显示
         dialogVisible:false, //结束咨询弹出框
         activeStatus:"0", //关闭时选择tab索引
         //cstProjects: ['鼻子整形', '脸部整形', '下巴整形', '其他整形','哈哈哈哈'],
         routerParam:{},//页面传值路由参数
         oCustomer:{},//咨询客户信息
         otheritems:"",
         otherresion:"",
         bookdate:"",
         consultItems:[],
         customerName:"",
         isCustomerinfo:false,//客户信息窗口
         gender:"1",
         birthday:"",
         dCurrentDate:"",
         sTimer:"00:00:00",
         dTimer:0,
         imgdata: [{id:'0',beforeUrl:'http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3d4f8896-13db-4a6a-a731-1a561107484d',afterUrl:'http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3d4f8896-13db-4a6a-a731-1a561107484d'}
             ,{id:'1',beforeUrl:'https://27478500.qcloud.la/serverpic/default_before.jpg',afterUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg'}
             ,{id:'2',beforeUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg',afterUrl:'https://27478500.qcloud.la/serverpic/default_after.jpg'}
         ],
         playBeforeUrl:'',
         playAfterUrl:'',
         //socket
         conCode:0,
         conSid:'',
         webSocket:null,
         conCodeList:[{id:0,val:''},{id:1,val:''},{id:2,val:''},{id:3,val:''},{id:4,val:''},{id:5,val:''}],
         conState:'noconnected',
         playingState:'waiting',
         conErrorMsg:''
     }
    },
    created() {
       let _This=this;
        _This.fTimer();
        _This.routerParam=this.$route.params;
       // console.log("options--------->",this.$route.params);
        this.initSocket();
        _This.fGetCustomerData();
        console.log("this.$route.params--------->",this.$route.params);
    },
    watch: {
        routerParam(){
            //console.log("Array.prototype.slice.call(arguments)----->",Array.prototype.slice.call(arguments));
            //this.routerParam.projects=[{productCode: "3002", productName: "开外眼角"}];
        }
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
            let _This = this;
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
                   // console.log("product result--------",result);
                    if(result.code==0&&result.data){
                      _This.aAutoSelect=result.data;
                    }
                    //console.log(" _This.aAutoSelect======>", _This.aAutoSelect);
                }
            }, 'withCredentials');

        },
        /**
         * 下拉框选中
         */
        fSelectProjecChange(eCode){
           let _This=this;
           let routerParam=_This.routerParam;
            _This.routerParam.projects=_This.routerParam.projects||[];

           // this.routerParam.projects= this.routerParam.projects.concat(this.routerParam.projects);
           _This.aAutoSelect.forEach(item=>{
               if(item.productCode==eCode){
                   let projecrItem={
                       projectCode:item.productCode,
                       projectName:item.productName
                   };
                   console.log("projecrItem=======>",projecrItem);
                   let result= _This.fExistProject(_This.routerParam.projects,projecrItem,"projectCode");
                   if(result<0){
                       _This.routerParam.projects.push(projecrItem);
                       _This.consultItems.push(eCode);
                       _This.faceDiagnoseProduct=_This.consultItems.join(",");
                   }else {
                       _This.$message.error('存在该项目');
                   }

                   console.log("this.routerParam.projects---->",_This.routerParam.projects);

               }
           });


           // _This.routerParam={over:"sdfgsdfgsfdg"};
        },
        fExistProject(aObj,oItem,keyName,callback){
            aObj=aObj||[];
            let result=-1;
            aObj.forEach(item=>{
                if(item[keyName]==oItem[keyName]){
                    result=1;
                }
            });
           // callback(result);
            return result;
        },
        /**
         * 结束咨询提交数据
         */
        fSubmitEndData(){

            return false;
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
        /**
         * 获取面诊客户资料
         */
        fGetCustomerData(){
            let _This=this;
            let postData={
                appointmentId: _This.routerParam.appointmentId,
                customerId:_This.routerParam.customerId
            };
            console.log("postData======>",postData);
            _.ajax({
                url: '/faceDiagnose/getCustomerData',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("fGetCustomerData result--------",result);
                    if(result.code==0&&result.data){
                        result.data.gender=result.data.gender+"";
                       _This.oCustomer=result.data;
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 更新添加客户信息
         * @param cid
         */
        fSaveCustomer(cid){
            let _This=this;
            let postData=_This.oCustomer;
            console.log("save user info=====>",cid);//oCustomer
            _.ajax({
                url: '/customers/update',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("fSaveCustomer result--------",result);
                    if(result.code==0&&result.data){
                        _This.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                    }else {
                        _This.$message.error('更新失败');
                    }

                }
            }, 'withCredentials');
        },

        /**
         * 关闭结束窗口
         */
        fCloseEnddialog(){
            let _This=this;
            _This.dialogVisible = false;
        },
        /**
         * 关闭客户信息窗口
         */
        fCloseCustomerInfo(){
            this.isCustomerinfo=true;
        },
        /**
         * 打开客户信息窗口
         */
        fOpenCustomerInfo(){
            this.isCustomerinfo=false;
        },
        /**
         * 打开连接设备窗口
         */
        fConnectDevice(){
            this.isConScreanItem=true;
            this.$nextTick(function () {
                this.inputConCode({keyCode:0},-1);
            })
        },
        /**
         * 关闭连接设备窗口
         */
        fCloseConBox(){
            this.isConScreanItem=false;
            this.conCodeList.forEach(m=>{m.val ='';});
            this.conState='noconnected';
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
                if (result.type=='connected'){
                        _this.conSid = result.content.sid;
                        if(this.conCode&&this.conCode!=0){
                            let bindObj = {"type":"sbind","content":{"code":this.conCode,"sid":_this.conSid}};
                            _this.webSocket.send(JSON.stringify(bindObj));
                        }
                }
                switch (result.code){
                    case 11:
                        _this.conState = 'connected';
                        setTimeout(function () {
                            _this.fCloseConBox();
                        },1000);
                        break;
                    case 1003:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg ="连接失败,请刷新重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                        },1000);
                        break;
                    case 1001:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg ="客户端不存在,请重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                        },1000);
                        break;
                    case 1002:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg ="连接会话已结束,请刷新重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                        },1000);
                        break;
                }
            }
        },
        inputConCode(e,params){
            if(e.keyCode !=8&&e.keyCode !=13) {
                if (params == 5) {
                    let _sconCode = '';
                    this.conCodeList.forEach(m=> {
                        _sconCode += m.val;
                    });
                    this.conCode = parseInt(_sconCode);
                    localStorage.setItem("rky_mc_conCode", this.conCode);
                    let bindObj = {"type": "bind", "content": {"code": this.conCode, "sid": this.conSid}};
                    this.webSocket.send(JSON.stringify(bindObj));


                } else {
                    let netInput = document.getElementById('codeid_' + (params + 1));
                    netInput.focus();
                    netInput.value = '';
                }
            }
        },
        playCase(params){
                this.playBeforeUrl = params.beforeUrl;
                this.playAfterUrl = params.afterUrl;
                let caseObj ={ "type":"image", "content":{ "code":this.conCode, "caseName":"玻尿酸瘦脸", "beforeUrl":params.beforeUrl, "afterUrl":params.afterUrl } };
                this.webSocket.send(JSON.stringify(caseObj));
                this.playingState = 'playing';
        }
    }
}