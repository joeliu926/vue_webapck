/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            defaultImg: require("../../../common/img/post-demo.png"), //默认上传图片
            tabCollotion:["case","material"],//案例材料选项
            tabType:"case",//切换案例和素材标识
            oReviewType:[{ttype:0,tname:"全部"},{ttype:1,tname:"未审核"},{ttype:2,tname:"通过"},{ttype:3,tname:"驳回"}],//审核状态集合
            reviewType:1,//审核状态0全部、1未审核、2通过、3驳回
            isLookAndReview:false,//是否查看并审核 true查看审核，false 展示列表
            oMaterial:[{},{},{},{}],//素材照片集合
            oTip:["标签一","标签二","标签三","标签四","标签五","标签六","标签七"],//标签集合
            input:'',
            input1:'',
            oCaseList: [],
            count: 0,
            total:0,
            pageNo: 1, //案例库编号
            pageSize:12,//案例库每页数量
            state:'',
            value:'',
            productName:'',
            doctorId:"",
            doctorlist:[],
            checkPageNo: 1, //审核库编号
            checkPageSize:2,//审核库每页数量
            aCheckList:[],//审核列表
            oCheckDetail:{},//提交审核详情
        };
    },
    filters:{
        productFilter:function (input) {
            if(input==null||!Array.isArray(input)){
                return "";
            }
            let result=[];
            input.forEach(item=>{
                result.push(item.productName);
            });
            return result.join("、");
        },
        dateFilter:function (input) {
            if(!input){
                return "";
            }
            return  _.date2String(new Date(input),"yyyy年MM月dd日");
        },
        checkFilter:function (input) {
            let result="";
            if(!input){
                return result;
            }
            switch(input){
                case 1:result="未审核";break;
                case 2:result="已审核";break;
                case 3:result="驳回";break;
                default:break;

            }
            return  result;
        }
    },
    created() {
      this.fSearchCaseList();
      this.getdoctorlist();
      this.fSearchCheckList();//获取审核列表
    },
    mounted(){
    },
    destroyed() {
    },
    methods: {
        /**/
        currentid(cmd){
            console.log("dddddddd-----",cmd);
            this.doctorId=cmd;
            this.fSearchCaseList();
           // console.log("this.doctorId-------", this.doctorId,item);
        },
        /*获取医生列表*/
        getdoctorlist(){
            let _this=this;
            let pData={
            }
            _.ajax({
                url: '/admin/backcase/setdoctorlist',
                method: 'POST',
                data: pData,
                success: function (result) {
                    if(result.code==0){
                        _this.doctorlist=result.data;
                    }
                    let alldata={id:"",name:"全部医生"};
                    _this.doctorlist.unshift(alldata);

                }
            }, 'withCredentials');
        },
        /**
         * 获取案例列表
         */
        fSearchCaseList(){
            var _This = this;
            let   postData={
               pageNo:_This.pageNo,
               pageSize:_This.pageSize,
               productName:_This.productName,
               doctorId:_This.doctorId,
            }
            _.ajax({
                url: '/admin/backcase/backcaselist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("============",result);
                    if(result.code==0){
                        _This.oCaseList=result.data.list;
                        _This.count=result.data.count;
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 删除案例
         * @param caseid
         */
        fDelData(caseid){
            let _This=this;
            this.$confirm('确认删吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                _This.fCaseDelete(caseid);
            });
        },
        /**
         * 案例删除
         * @param caseid
         * @returns {boolean}
         */

        fCaseDelete(caseid){
           // console.log("--------",caseid);
            if(!caseid){
                return false;
            }
            var _This = this;
            let  postData={
                id:caseid
            }
            _.ajax({
                url: '/admin/backcase/casedelete',
                method: 'POST',
                data: postData,
                success: function (result) {
                   // console.log("====delete========",result);
                    if(result.code == 0) {
                        _This.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        let deIndex = -1;
                        _This.oCaseList.forEach((oitem, index) => {
                            if(oitem.id ==caseid) {
                                deIndex = index;
                            }
                        });
                        if(deIndex >= 0) {
                            _This.oCaseList.splice(deIndex, 1);
                        }
                    } else {
                        _This.$message.error("删除失败");
                    }

                }
            }, 'withCredentials');
        },
        fKeyDown(e){
            this.fSearchCaseList();
        },
        fSearchByProduct(){
            this.fSearchCaseList();
        },
        handleCurrentChange(pnum){
            this.pageNo=pnum;
            this.fSearchCaseList();
        },
        handleIconClick(){
        },
        /**
         * 切换案例库，素材审核
         */
        fChangeTab(ttype,fff){
            let _This=this;
            _This.isLookAndReview=false;
           // _This.tabType=ttype;
        },
        /**
         * 审核状态切换
         */
        fReviewTab(ttype){
            let _This=this;
            //console.log("-----------ttype-----",ttype);

            _This.checkPageNo=1;
            _This.reviewType=ttype;
            _This.fSearchCheckList();
        },
        /**
         * 案例审核详情
         */
        fReviewCase(item){
            console.log("review-----",item);
            let _This=this;
            _This.isLookAndReview=true;
            let postData={
                id:item
            }
            _.ajax({
                url: '/admin/mediabase/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("=====get detail=======",result);
                    if(result.code==0){
                        _This.oCheckDetail=result.data;
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 提交审核
         */
        fSubmitReview(){
            console.log("submit review-----");
            let _This=this;
            _This.$confirm('确定图片和视频内容审核无误吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then((result) => {
                if(!result){
                    return false;
                }
              console.log("result---------",result);
              let oCheckDetail=_This.oCheckDetail;
                let putData={
                    id:oCheckDetail.id,
                    fileVo:oCheckDetail.fileVo,
                    remark:oCheckDetail.remark,
                };
                console.log("putData---------",putData);
               // return false;
                let postData={
                    pData:JSON.stringify(putData)
                };
                _.ajax({
                    url: '/admin/mediabase/check',
                    method: 'POST',
                    data: postData,
                    success: function (result) {
                        console.log("=====mediabase/check=======",result);
                        if(result.code==0){
                            _This.isLookAndReview=false;
                            _This.fSearchCheckList();
                        }

                    }
                }, 'withCredentials');


            }).catch(() => {
                _This.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        /**
         * 获取审核列表
         */
        fSearchCheckList(){
            var _This = this;
            let postData={
                pageNo:_This.checkPageNo,
                pageSize:_This.checkPageSize,
                busStatus:_This.reviewType||""
            };
            console.log(" fSearchCheckList---post data----",postData);
            _.ajax({
                url: '/admin/mediabase/pagelist',
                method: 'POST',
                data: postData,
                success: function (result) {
                   // console.log("=====mediabase/pagelist=======",result);
                    if(result.code==0){
                       _This.aCheckList=result.data.list;
                        _This.checkCount=result.data.count;
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 审核切换页数
         */
        handleCheckChange(pnum){
            this.checkPageNo=pnum;
            this.fSearchCheckList();
        }


    },
    watch: {

    }
}