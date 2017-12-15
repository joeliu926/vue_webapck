var constant = require('../../common/utils/constants');
export default {
    components: {},
    data () {
        return {
            aAutoSelect: [],//模糊搜索下拉
            faceDiagnoseRemarks: "",//原因（复诊和放弃时使用）
            faceDiagnoseDate: "",//面诊时间（复诊使用）
            faceDiagnoseProduct: "",//面诊成功项目（成功时使用）
            isConScreanItem: false, //连接设备弹出判断
            isCurrentProject: "0", //当前选择项目判断
            isDocProject: "", //当前选中的医生
            isSelectItem: false, //播放页面图片显示
            dialogVisible: false, //结束咨询弹出框
            activeStatus: "0", //关闭时选择tab索引
            //cstProjects: ['鼻子整形', '脸部整形', '下巴整形', '其他整形','哈哈哈哈'],
            routerParam: {},//页面传值路由参数
            oCustomer: {},//咨询客户信息
            oProductList: [],//head项目列表
            oDoctorList: [],//head医生列表
            oCaseList: [], //查询获取案例列表
            oShowCaseList: [],//选择需要演示的案例
            oShowCaseListIds: [],//选择演示的id集合
            oShowCaseTempList: [], //演示案例的临时集合*************
            oCurrentShowItem: {frondFile: [], backFile: []},//当前展示的案例
            oCurrentShowItemIndex: 0,//当前展示的案例的索引
            oSourceList: [],//客户来源列表
            isFillProject: false,//结束是否填写项目信息
            isScanPic: false,//是否浏览术前的照片
            scanPicIndex: 0,//当前浏览的术前图片的索引
            currentScanPic: "",//当前浏览的图片
            scanPicType: 1,//浏览图片的类型，1 为术前图片，2为沟通记录图片
            oNameList: [],
            otheritems: "",
            otherresion: "",
            bookdate: "",
            consultItems: [],
            customerName: "",
            isCustomerinfo: false,//客户信息窗口
            gender: "1",
            birthday: "",
            dCurrentDate: "",
            sTimer: "00:00:00",
            dTimer: 0,
            //socket
            conCode: 0,
            conSid: '',
            webSocket: null,
            conCodeList: [{id: 0, val: ''}, {id: 1, val: ''}, {id: 2, val: ''}, {id: 3, val: ''}, {
                id: 4,
                val: ''
            }, {id: 5, val: ''}],
            conState: 'noconnected',
            playingState: 'waiting',
            conErrorMsg: '',
            oEvent: {
                code: "",//事件码 consultingBegin  caseSearch  casePlay consultingEnd
                eventAttrs: {
                    triggeredTime: "",//触发时间
                    consultingItem: "",//咨询项目
                    startTime: "",//开始时间
                    reserveId: 0,//预约ID
                    diagnoseId: "",//面诊id
                    /***************************/
                    consultingId: 0,//咨询id
                    item: "",//案例项目
                    doctor: "",//案例医生,
                    consultingMark: "",//咨询结果
                    dealItems: "",//成功项目
                    reserveTime: "",//复诊时间
                    reserveMark: "",//复诊备注
                    giveupMark: "",//无需跟进原因
                    endTime: "",//结束时间

                }
            }
        }
    },
    created() {
        let _This = this;
        _This.fTimer();

        let faceId = _This.$route.params.diagid;
        _This.routerParam = this.$route.params;
        if (_This.$route.params.diagid == 0) {
            _This.routerParam.adddiag = true;
        }
        _This.fGetSingleDiagnose(function (oUserData) {

            _This.routerParam.appointmentId = oUserData.appointmentId || "";
            _This.routerParam.customerId = oUserData.customerId || "";
            _This.routerParam.projects = oUserData.projectList || [];
            _This.routerParam.diagid = oUserData.id || "";
            if (_This.routerParam.projects) {
                _This.routerParam.projects.forEach(item => {
                    _This.consultItems.push(item.projectCode);
                });
            }

            _This.initSocket();
            _This.fGetCustomerData();
            // console.log("this.$route.params--------->",this.$route.params);
            _This.fProductList();
            _This.fDoctorList();
            if (_This.$route.params.diagid != 0) {
                _This.fUpdateClue();
                /****事件触发 start****/
                _This.code = "consultingBegin";
                _This.consultingItem = _This.routerParam.projects;
                _This.reserveId = _This.routerParam.appointmentId;
                _This.diagnoseId = _This.routerParam.diagid;
                _This.fEvent();
                /****事件触发 end****/
            }


        });


    },
    watch: {
        routerParam(){
            //console.log("Array.prototype.slice.call(arguments)----->",Array.prototype.slice.call(arguments));
            //this.routerParam.projects=[{productCode: "3002", productName: "开外眼角"}];
        }
    },
    filters: {
        dateFilter: function (input) {
            if (input && input != "") {
                let sDes = "上午";
                let ihour = input.getHours();
                if (ihour >= 12) {
                    sDes = "下午";
                }
                return sDes + _.date2String(new Date(input), "hh:mm");
            }
        },
        dateTimer: function (input) {

        },
        projectFilter: function (input) {
            if (!input || input == "" || typeof(input) != "object") {
                return "";
            }
            let result = [];
            input.forEach(item => {
                result.push(item.projectName);
            });
            return result.join("、");
        },
        sourceFilter: function (input, sList) {
            let result = "请选择";
            let _This = this;
            sList = sList || [];
            sList.forEach(item => {
                if (item.code == input) {
                    result = item.name;
                }
            });
            return result;
        }
    },
    mounted(){


    },
    destroyed() {

    },
    methods: {
        fTimer(){
            let _This = this;
            setInterval(function () {
                _This.dCurrentDate = new Date();
                let temTimer = _This.dTimer;
                _This.dTimer = temTimer + 1;
                let nSec = temTimer % 60 + "";
                let nMin = parseInt(temTimer / 60) % 60 + "";
                let nHour = parseInt(temTimer / 3600) % 60 + "";
                let sSec = nSec[1] ? nSec : ("0" + nSec);
                let sMin = nMin[1] ? nMin : ("0" + nMin);
                let sHour = nHour[1] ? nHour : ("0" + nHour);
                _This.sTimer = sHour + ":" + sMin + ":" + sSec;
            }, 1000);
        },
        fSelectItems(){

        },

        /**
         * 校验当前的播放情况
         */
        fCheckPlayingItem(){
            let _This = this;
            let isHave = false;
            _This.oShowCaseList.forEach((itemShow, index) => {
                if (itemShow.id == _This.oCurrentShowItem.id) {
                    isHave = true;
                    _This.oCurrentShowItemIndex = index;
                }
            });
            if (!isHave) {
                _This.oCurrentShowItem = {frondFile: [], backFile: []};
                _This.oCurrentShowItemIndex = -1;
                _This.playingState = 'waiting';
            }
        },
        /**
         * 头部选择项目
         * @param eCode
         */
        fChooseItems(eItem){
            //console.log("eItem========>",eItem);
            let _This = this;
            _This.isCurrentProject = eItem.productCode;
            _This.isSelectItem = true;
            _This.isDocProject = "";
            _This.fDoctorList();
            _This.fCaseHeaderList();

            /*项目上报事件*/
            _This.code = "caseSearch";
            _This.item = eItem;
            _This.doctor = _This.isDocProject || "";
            _This.fEvent();

        },
        /**
         * 头部选择医生
         * @param eDoctor
         */
        fChooseDoc(eDoctor){
            //console.log(eDoctor);
            let _This = this;
            _This.isSelectItem = true;
            _This.isDocProject = eDoctor;
            _This.fCaseHeaderList();

            /*医生上报事件*/
            _This.code = "caseSearch";
            //_This.item=eItem;
            _This.doctor = _This.isDocProject;
            _This.fEvent();
        },
        /**
         * 结束咨询弹出框
         */
        fEndConsult(){
            let _This = this;
            _This.dialogVisible = true;
        },
        /**
         * 结束框切换tab
         * @param e
         */
        fChangeTab(e){
            let _This = this;
            let dataSet = e.target.dataset;
            _This.activeStatus = dataSet.tabtype;
        },
        /**
         * 结束框选择项目
         */
        fChangeCheck(){
            // console.log("dddddddd--change", this.consultItems);
            this.faceDiagnoseProduct = this.consultItems.join(",");
        },

        /**
         * 获取单条面诊记录
         * @param ename
         * @returns {boolean}
         */
        fGetSingleDiagnose(callback){
            let _This = this;
            if (!_This.$route.params.diagid || _This.$route.params.diagid == 0) {
                callback({});
                return false;
            }
            let postData = {
                faceId: _This.$route.params.diagid
            };
            _.ajax({
                url: '/faceDiagnose/getSingleDiagnose',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("fGetSingleDiagnose--------", result);
                    if (result.code == 0 && result.data) {
                        callback(result.data);
                    } else {
                        callback({});
                    }

                }
            }, 'withCredentials');

        },

        /**
         * 获取项目列表
         * @param ename
         * @returns {boolean}
         */
        fProductList(){
            let _This = this;
            let postData = {
                all: 0
            };
            _.ajax({
                url: '/product/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("product list result--------",result);
                    if (result.code == 0 && result.data) {
                        _This.oProductList = result.data;
                    }

                }
            }, 'withCredentials');

        },
        /**
         * 获取案例相关的医生列表
         * @param ename
         * @returns {boolean}
         */
        fDoctorList(){
            let _This = this;
            let currentCode = _This.isCurrentProject == "0" || _This.isCurrentProject == "1" ? "" : _This.isCurrentProject;
            let postData = {
                productCode: currentCode
            };
            _.ajax({
                url: '/caseheader/doctorlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("fDoctorList list result--------",result);
                    if (result.code == 0 && result.data) {
                        _This.oDoctorList = result.data;
                    }

                }
            }, 'withCredentials');

        },
        /**
         * 获取项目医生相关案例列表
         * @param ename
         * @returns {boolean}
         */
        fCaseHeaderList(){
            let _This = this;
            let currentCode = (_This.isCurrentProject == "1" || _This.isCurrentProject == "0") ? "" : _This.isCurrentProject;
            let postData = {
                productCode: currentCode,
                doctorName: _This.isDocProject
            };
            //console.log("fCaseHeaderList list postData--------", postData);
            _.ajax({
                url: '/caseheader/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("fCaseHeaderList list result--------", result);
                    if (result.code != 0 || !result.data) {
                        return false;
                    }
                    _This.oCaseList = [];
                    result.data.forEach(item => {
                        if (_This.oShowCaseListIds.indexOf(item.id) < 0) {
                            _This.oCaseList.push(item);
                        }
                    });


                }
            }, 'withCredentials');

        },
        /**
         * 选择需要演示的案例
         * @param scase
         * @param sindex
         */
        fSelectShowCase(scase, sindex){
            let _This = this;
            if (_This.oShowCaseListIds.indexOf(scase.id) >= 0) {
                return false;
            }
            _This.oCaseList.splice(sindex, 1);
            _This.oShowCaseList.push(scase);
            _This.oShowCaseListIds.push(scase.id);

            // console.log("oShowCaseList=======>",_This.oShowCaseList);

        },
        /**
         * 移除需要演示的案例
         */
        fRemoveShowCase(scase, sindex){
            let _This = this;
            _This.oShowCaseList.splice(sindex, 1);
            _This.oShowCaseListIds.splice(_This.oShowCaseListIds.indexOf(scase.id), 1);
            _This.oCaseList.push(scase);
        },
        /**
         * 关闭选择案例向上的小箭头点击
         */
        fCloseSelect(){
            //console.log("close choose case");
            let _This = this;
            _This.isSelectItem = false;
            _This.fCheckPlayingItem();

            _This.fCalculateShowList();//******
        },
        /**
         * 左右切换案例
         * @param param
         */
        fShowNextCase(param){

            let _This = this;
            //console.log("next------>", _This.oShowCaseList,_This.oCurrentShowItem);
            let caseLength = _This.oShowCaseList.length;
            if (param < 0) {
                _This.oCurrentShowItemIndex--;
                if (_This.oCurrentShowItemIndex < 0) {
                    _This.oCurrentShowItemIndex = caseLength - 1;
                }
            } else {
                _This.oCurrentShowItemIndex++;
                if (_This.oCurrentShowItemIndex > caseLength - 1) {
                    _This.oCurrentShowItemIndex = 0;
                }
            }
            _This.oCurrentShowItem = _This.oShowCaseList[_This.oCurrentShowItemIndex];
            _This.playCase(_This.oCurrentShowItem);
        },
        /**
         * 下拉框变化
         * @param ename
         * @returns {boolean}
         */
        fChangeAutoSelect(ename){
            // console.log("--------自动选择-- project---------",ename);
            if (ename.trim() == "") {
                return false;
            }
            let _This = this;
            let postData = {
                productName: ename
            };
            _.ajax({
                url: '/product/searchList',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("product result--------",result);
                    if (result.code == 0 && result.data) {
                        _This.aAutoSelect = result.data;
                    }
                    //console.log(" _This.aAutoSelect======>", _This.aAutoSelect);
                }
            }, 'withCredentials');

        },
        /**
         * 下拉框选中
         */
        fSelectProjecChange(eCode){
            // console.log("----下拉结束选中 project----",eCode);
            let _This = this;
            let routerParam = _This.routerParam;
            _This.routerParam.projects = _This.routerParam.projects || [];

            // this.routerParam.projects= this.routerParam.projects.concat(this.routerParam.projects);
            _This.aAutoSelect.forEach(item => {
                if (item.productCode == eCode) {
                    let projecrItem = {
                        projectCode: item.productCode,
                        projectName: item.productName
                    };
                    // console.log("projecrItem=======>", projecrItem);
                    let result = _This.fExistProject(_This.routerParam.projects, projecrItem, "projectCode");
                    if (result < 0) {
                        _This.routerParam.projects.push(projecrItem);
                        _This.consultItems.push(eCode);
                        _This.faceDiagnoseProduct = _This.consultItems.join(",");
                    } else {
                        _This.$message.error('存在该项目');
                    }

                    // console.log("this.routerParam.projects---->", _This.routerParam.projects);

                }
            });


            // _This.routerParam={over:"sdfgsdfgsfdg"};
        },
        /**
         * 一个对象是否存在另一个
         * @param aObj
         * @param oItem
         * @param keyName
         * @param callback
         * @returns {number}
         */
        fExistProject(aObj, oItem, keyName, callback){
            aObj = aObj || [];
            let result = -1;
            aObj.forEach(item => {
                if (item[keyName] == oItem[keyName]) {
                    result = 1;
                }
            });
            // callback(result);
            return result;
        },
        /**
         * 结束咨询提交数据
         */
        fSubmitEndData(){

            ////****************************移除**********************//
            let _This = this;
            let postData = {
                id: _This.routerParam.diagid,
                flag: _This.activeStatus,
                faceDiagnoseRemarks: _This.faceDiagnoseRemarks,
                faceDiagnoseDate: _This.faceDiagnoseDate ? _This.faceDiagnoseDate.valueOf() : "",
                faceDiagnoseProduct: _This.consultItems.join(",")
            };
            if(postData.id<=0){
                _This.$message.error('未选择任何面诊客户');
                return false;
            };
            // console.log("postData======>", postData);
            if (postData.flag == "0" && postData.faceDiagnoseProduct.length <= 0) {
                // _This.isFillProject=true;
                _This.$message.error('项目信息必选');
                return false;
            }
            if (postData.flag == "1" && postData.faceDiagnoseDate.length <= 0) {
                _This.$message.error('面诊时间必填');
                return false;
            }
            if (postData.flag == "2" && postData.faceDiagnoseRemarks.length <= 0) {
                _This.$message.error('放弃面诊原因必填');
                return false;
            }
            /*结束播放提交事件*/
            // _This.code="consultingEnd";//fGetEventType()
            _This.code = _This.fGetEventType();
            _This.consultingMark = _This.activeStatus;//
            _This.dealItems = _This.consultItems;
            _This.reserveTime = postData.faceDiagnoseDate;
            _This.reserveMark = postData.faceDiagnoseRemarks;
            _This.giveupMark = postData.faceDiagnoseRemarks;
            _This.fEvent();

            _.ajax({
                url: '/faceDiagnose/finished',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("fSubmitEndData result--------", result);
                    if (result.code == 0 && result.data) {
                        _This.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        _This.fExitConsole();//结束演示提交控制台消息
                        setTimeout(function () {
                            _This.$router.push({
                                name: '/consultdashboard', params: {
                                    sbsuccess: true
                                }
                            });
                        }, 2000);

                    } else {
                        _This.$message.error('提交失败');
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 获取事件类型
         */
        fGetEventType(){
            let etype = this.activeStatus;
            let result = "";
            if (etype == "0") {
                result = "consultingCloseByWin";//成功
            } else if (etype == "1") {
                result = "consultingCloseByreserve";//预约下次
            } else if (etype == "2") {
                result = "consultingCloseByLose";//无需跟进
            }
            return result;
        },
        /**
         * 关闭未选择项目提示框
         */
        fCloseFillProject(){
            this.isFillProject = false;
        },
        /**
         * 获取面诊客户资料
         */
        fGetCustomerData(){
            let _This = this;
            _This.fGetCustomerSource();

            if (!_This.routerParam.customerId) {

                _This.oCustomer.gender="2";
                return false;
            }
            let postData = {
                appointmentId: _This.routerParam.appointmentId,
                customerId: _This.routerParam.customerId
            };
            //console.log("postData======>", postData);
            _.ajax({
                url: '/faceDiagnose/getCustomerData',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("fGetCustomerData result--------", result);
                    if (result.code == 0 && result.data) {
                        result.data.gender = result.data.gender + "";
                        result.data.birthday = result.data.birthday ? _.date2String(new Date(parseInt(result.data.birthday)), "yyyy-MM-dd") : "";
                        _This.oCustomer = result.data;
                    }
                }
            }, 'withCredentials');
        },
        /**
         * 根据名称模糊查询客户列表
         */
        fGetCustomerList(ename){
            // console.log("-=-=-=-=进入模糊-=-=-=-",ename,this.oCustomer.name,"000000-=-=-=-");
            var _This = this;
            if (_This.oCustomer.name == "" || ename == "") {
                return false;
            }
            _This.fSearchUserDpData(ename, function (result) {
                // console.log("fGetCustomerList-------》",result);
                if (result.code == 0 && result.data) {
                    _This.oNameList = result.data.list;
                    _This.oCustomer.name = ename;
                }
            });
        },
        /**
         * 选择下拉的名称
         */
        fSelectNameItem(ename){
            // console.log("-=-=-=-=-=-choose=-=rrrr-=-=-=-=-=-=-",ename);
            let _This = this;
            if (!_This.routerParam.adddiag) {
                return false;
            }


            let strIndex = ename.indexOf("(");
            if (strIndex > 0) {
                ename = ename.substr(0, strIndex);
                //console.log("ename.ename--+++------",ename);
            }
            _This.fSearchUserDpData(ename, function (result) {
                //console.log("fSelectNameItem-------》",result);
                if (result.code == 0 && result.data) {
                    if (_This.routerParam.adddiag && result.data.list.length == 1 && result.data.list[0].name == _This.oCustomer.name) {
                        result.data.list[0].gender = result.data.list[0].gender + "";
                        result.data.list[0].birthday = result.data.list[0].birthday ? _.date2String(new Date(parseInt(result.data.list[0].birthday)), "yyyy-MM-dd") : "";
                        _This.oCustomer = result.data.list[0];

                    } else {
                        // _This.oCustomer.name=ename;
                    }
                    _This.oCustomer.name = ename;
                }
            });
        },
        fSearchUserDpData(ename, callback){
            var postData = {
                startDate: "",
                endDate: "",
                pageNo: 1,
                pageSize: 6,
                fieldValue: ename,
                searchField: "name"
            };
            _.ajax({
                url: '/customers/customerlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    callback(result);
                }
            }, 'withCredentials');
        },
        /**
         * 获取面诊客户渠道来源
         */
        fGetCustomerSource(){
            let _This = this;
            let postData = {};
            // console.log("postData======>", postData);
            _.ajax({
                url: '/source/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("fGetCustomerSource result--------", result);
                    if (result.code == 0 && result.data) {
                        let oData = result.data || [];
                        oData.forEach(oItem => {
                            oItem.sourceList.forEach(item => {
                                _This.oSourceList.push(item);
                            });
                        });

                    }

                }
            }, 'withCredentials');
        },
        /**
         * 选择咨询客户来源
         */
        fChooseSource(eCode){
            // console.log("customer source-------->",eCode);
            let _This = this;

            _This.oSourceList.forEach(item => {
                if (item.code == eCode) {
                    _This.oCustomer.source = item.code;
                }
            });
        },
        /**
         * 更新添加客户信息(弃用)
         * @param cid
         */
        fSaveCustomer(cid){
            let _This = this;
            let postData = _This.oCustomer;
            //console.log("save user info=====>", _This.oCustomer);//oCustomer ///diagnoseId
            _.ajax({
                url: '/customers/update',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("fSaveCustomer result--------", result);
                    if (result.code == 0 && result.data) {
                        _This.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                    } else {
                        _This.$message.error('更新失败');
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 更新添加客户信息(新)
         * @param cid
         */
        fUpdateCustomer(cid){
            let _This = this;
            let postData = _This.oCustomer || {};
            if(!postData.name||postData.name.trim().length<=0){
                _This.$message.error('客户姓名不能为空');
                return false;
            }
            if(!(/^1[345789]\d{9}$/.test(postData.phoneNum))){
                _This.$message.error('客户手机号码验证失败');
                return false;
            }
            postData.birthday = postData.birthday ? postData.birthday.valueOf() : "";
            postData.diagnoseId = _This.routerParam.diagid || "";
            // console.log("new save user info=====>", _This.oCustomer);//oCustomer ///diagnoseId
            _.ajax({
                url: '/faceDiagnose/newFaceDiagnose',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("fUpdateCustomer result--------", result);
                    if (result.code == 0 && result.data) {

                        if (_This.routerParam.adddiag && !_This.routerParam.diagid) {
                            _This.diagnoseId = result.data.id;
                            _This.routerParam.diagid = result.data.id;
                            _This.oCustomer.id = result.data.customerId;
                            _This.code = "consultingBegin";
                            _This.fEvent();
                        }

                        _This.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        _This.isCustomerinfo = true;
                        if (_This.oShowCaseList.length <= 0) {
                            _This.fChooseItems({productCode: 1});
                        }
                    } else {
                        _This.$message.error('更新失败');
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 更新线索信息NETWORK_CONSULTING(1,"网络咨询"),LIVE_CONSULTANT(2,"现场咨询"),  REVERTING_IN(3,"恢复中"),  FINISH(4,"关闭")
         * @param cid
         */
        fUpdateClue(){
            let _This = this;
            if (!_This.routerParam.appointmentId) {
                return false;
            }
            let postData = {
                appointmentId: _This.routerParam.appointmentId,
                phase: 2,
                phaseName: "现场咨询"
            };
            _.ajax({
                url: '/clue/update',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("fUpdateClue result--------", result);


                }
            }, 'withCredentials');
        },

        /**
         * 关闭结束窗口
         */
        fCloseEnddialog(){
            let _This = this;
            _This.dialogVisible = false;
        },
        /**
         * 关闭客户信息窗口
         */
        fCloseCustomerInfo(){
            let _This = this;
            _This.isCustomerinfo = true;
            _This.isScanPic = false;
            if (_This.oShowCaseList.length <= 0) {
                _This.fChooseItems({productCode: 1});
            }
        },
        /**
         * 打开客户信息窗口
         */
        fOpenCustomerInfo(){
            this.isCustomerinfo = false;
        },
        /**
         * 打开连接设备窗口
         */
        fConnectDevice(){
            this.isConScreanItem = true;
            this.$nextTick(function () {
                // this.inputConCode({keyCode: 0}, -1);
                let netInput = document.getElementById('codeid_0');
                netInput.focus();
            })
        },
        /**
         * 关闭连接设备窗口
         */
        fCloseConBox(){
            this.isConScreanItem = false;
            /*   this.conCodeList.forEach(m => {
             m.val = '';
             });*/
            this.conState = 'noconnected';
        },
        initSocket(){
            if (window.localStorage) {
                this.conCode = localStorage.getItem("rky_mc_conCode");
            } else {
                alert('This browser does NOT support localStorage');
            }

            this.webSocket = new WebSocket(`${constant.wsReqUrl}console`);

            let _this = this;

            this.webSocket.onmessage = function (e) {
                let result = JSON.parse(e.data);
                if (result.type == 'connected') {
                    _this.conSid = result.content.sid;
                    if (this.conCode && this.conCode != 0) {
                        let bindObj = {"type": "sbind", "content": {"code": this.conCode, "sid": _this.conSid}};
                        _this.webSocket.send(JSON.stringify(bindObj));
                    }
                }
                switch (result.code) {
                    case 11:
                        _this.conState = 'connected';
                        setTimeout(function () {
                            _this.fCloseConBox();
                        }, 1000);
                        break;
                    case 1003:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg = "连接失败,请刷新重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                            _this.conCodeList.forEach((m, index) => {
                                m.val = '';
                            });
                        }, 1000);
                        break;
                    case 1001:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg = "客户端不存在,请重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                            _this.conCodeList.forEach((m, index) => {
                                m.val = '';
                            });
                        }, 1000);
                        break;
                    case 1002:
                        _this.conState = 'connecteerror';
                        _this.conErrorMsg = "连接会话已结束,请刷新重试！";
                        setTimeout(function () {
                            _this.fCloseConBox();
                            _this.conCodeList.forEach((m, index) => {
                                m.val = '';
                            });
                        }, 1000);
                        break;
                }
            }
        },
        inputConCode(e, params){
            if (e.keyCode != 8 && e.keyCode != 13) {
                if (params == 5) {
                    let _sconCode = '';
                    this.conCodeList.forEach(m => {
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
                    this.conCodeList.forEach((m, index) => {
                        if (index == params + 1) {
                            m.val = '';
                        }

                    });
                }
            }
        },
        /**
         * 播放案例
         * @param params
         */
        playCase(params){

            let _This = this;
            _This.oCurrentShowItem = params;
            _This.fCheckPlayingItem();
            _This.fCalculateShowList();
            let caseObj = {
                "type": "image",
                "content": {
                    "code": _This.conCode,
                    "caseName": _This.oCurrentShowItem.productName,
                    "beforeUrl": _This.oCurrentShowItem.frondFile.url,
                    "afterUrl": _This.oCurrentShowItem.backFile.url
                }
            };
            this.webSocket.send(JSON.stringify(caseObj));
            this.playingState = 'playing';

            /*播放上报事件*/
            _This.code = "casePlay";
            _This.item = params;
            console.log("播放项目--------》", params);
            _This.fEvent();

        },
        /**
         * 结束演示，退出控制台//console closed  {"type":"closed","content":{"code":1234,"sid":"aaa"}}
         */
        fExitConsole(){
            let _This = this;
            let oExitCode = {
                "type": "closed",
                "content": {
                    "code": _This.conCode,
                    "sid": _This.conSid
                }
            };
            _This.webSocket.send(JSON.stringify(oExitCode));
        },
        /**
         * 浏览术前咨询图片
         */
        fScanConsultPic(pIndex, pType){
            let _This = this;
            let beforePic = _This.oCustomer.beforePictures;
            if (pType == 2) {
                beforePic = _This.oCustomer.consultFileList;
            }
            _This.scanPicType = pType;
            _This.scanPicIndex = pIndex;
            _This.currentScanPic = beforePic[pIndex];
            _This.isScanPic = true;
        },
        /**
         * 切换术前浏览图片
         * @param pIndex
         */
        fChangeScanPic(pIndex){
            let _This = this;
            let beforePic = _This.oCustomer.beforePictures;
            if (_This.scanPicType == 2) {
                beforePic = _This.oCustomer.consultFileList;
            }
            let bLength = beforePic.length;
            let cIndex = _This.scanPicIndex;
            if (pIndex > 0) {
                _This.scanPicIndex = (++cIndex) >= bLength ? 0 : cIndex;

            } else {
                _This.scanPicIndex = (--cIndex) < 0 ? (bLength - 1) : cIndex;
            }
            _This.currentScanPic = beforePic[_This.scanPicIndex];
        },
        /**
         * 关闭贴花图片窗口
         */
        fClosePicdialog(){
            this.isScanPic = false;
        },
        /**
         * 计算需要展示的案例
         */
        fCalculateShowList(){
            //oShowCaseTempList
            let _This = this;
            let iShowCount = _This.oShowCaseList.length;
            let currIndex = _This.oCurrentShowItemIndex < 0 ? 0 : _This.oCurrentShowItemIndex;
            let temEnd = currIndex + 4;
            let temStart = currIndex - 3; //
            let istart = temStart > 0 ? temStart : 0;
            let iend = temEnd < iShowCount ? temEnd : iShowCount;

            _This.oShowCaseTempList = _This.oShowCaseList.slice(istart, iend);

            for (let i = 0; i < 3 - currIndex; i++) {
                let oTemShowItem = {frondFile: [], backFile: []};
                _This.oShowCaseTempList.unshift(oTemShowItem);
            }
        },
        /**
         * 事件上报
         * @param e
         */
        fEvent(){
            // console.log("event start--------");
            let _This = this;
            let postData = {EventData: _This.fGetEventParam()};
            // console.log("JSON.stringify(postData) ------>",postData);
            _.ajax({
                url: '/event/v2',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("event result--------",result);
                    if (result.code == 0 && result.data) {

                    }
                }
            }, 'withCredentials');
        },
        /**
         * 获取事件参数
         */
        fGetEventParam(){
            let _This = this;
            let oEvent = {
                code: _This.code || "",//事件码 consultingBegin  caseSearch  casePlay consultingEnd
                eventAttrs: {
                    triggeredTime: new Date().valueOf(),
                    consultingItem: _This.consultingItem || "",//咨询项目
                    startTime: new Date().valueOf(),//开始时间
                    reserveId: _This.reserveId || "",//预约ID
                    diagnoseId: _This.diagnoseId || "",//面诊id
                    /***************************/
                    consultingId: _This.consultingId || "",//咨询id
                    item: _This.item || "",//案例项目
                    doctor: _This.doctor || "",//案例医生,
                    consultingMark: _This.consultingMark || "",//咨询结果
                    dealItems: _This.dealItems || "",//成功项目
                    reserveTime: _This.reserveTime || "",//复诊时间
                    reserveMark: _This.reserveMark || "",//复诊备注
                    giveupMark: _This.giveupMark || "",//无需跟进原因
                    endTime: new Date().valueOf(),//结束时间
                }
            }
            return JSON.stringify(oEvent);
        }
    }
}