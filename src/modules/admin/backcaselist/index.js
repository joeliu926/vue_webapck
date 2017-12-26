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
            input:'',
            input1:'',
            oCaseList: [],
            count: 0,
            total:0,
            pageNo: 1,
            pageSize:3,
            state:'',
            value:'',
            productName:'',
            doctorId:"",
            doctorlist:[],

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


        }
    },
    created() {
      this.fSearchCaseList();
      this.getdoctorlist();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        /**/
        currentid(){
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
                   // console.log("获取医生列表成功-------", result);
                    _this.doctorlist=result.data;
                }
            }, 'withCredentials');
        },
        fSearchCaseList(){
            var _This = this;
            let   postData={
               pageNo:_This.pageNo,
               pageSize:_This.pageSize,
               productName:_This.productName,
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
        }
    },
    watch: {

    }
}