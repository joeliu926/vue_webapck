export default {
    components: {},
    data () {
        return {
            total:0,
            count: 0,
            pageNo: 1,
            pageSize:12,
            status:1,
            repage:3,
            searchField: "name",
            fieldValue:"",
            startDate: "",
            endDate: "",
            name: "",
            phoneNum: "13455555555",
            wechatNum: "wechat",
            customerBlock: "顾客",
            title: "../../common/img/gaoji2.png",
            customerName: "this is a user",
            aTriagelist: [],
            willShow:0,
            startDatePicker:this.beginDate(),
            endDatePicker:this.processDate(),

        }

    },
    created() {
        // this.ready();
        this.searchData();
    },
    mounted(){

    },
    destroyed() {

    },
    filters:{
        dateFilter:function (input) {
            if(input&&input!=""){
                return  _.date2String(new Date(input),"yyyy-MM-dd ");//hh:mm:ss
            }
        },
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        },
        array2String:function(input){
            if(input&&input!=""){
                return  input.join("");
            }
        }
    },
    methods: {
        beginDate(){
            let _This = this
            return {

               function( time){
                   return time.getTime();
               }
            }
        },
        //提出结束时间必须大于提出开始时间
        processDate(){
            let _This = this
            return {
                disabledDate(time){
                    if(_This.startDate){
                        return new Date(_This.startDate).getTime() > time.getTime()
                    }else{
                        return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
                    }
                }
            }
        },
        // ready(){
        //    // console.log("=============000000000000================");
        //      var _This = this;
        //      _.ajax({
        //          url: '/triage/list',
        //          method: "POST",
        //          data: {
        //              pageNo:_This.pageNo,
        //              pageSize:_This.pageSize,
        //              status:1,
        //
        //          } ,
        //          success: function (result) {
        //              //console.log(result);
        //              if(result.code==0&&result.data){
        //                 console.log(result.data);
        //                  _This.aTriagelist = result.data.list;
        //                  _This.count=result.data.count;
        //              }
        //          }
        //      }, 'withCredentials');
        // },
        searchData(){
            var _This = this;
            var postData={
                pageNo: _This.pageNo,
                pageSize:_This.pageSize,
                status:1,
                // startDate: _This.startDate,
                // endDate: _This.endDate,
                 fieldValue:_This.fieldValue,
                 searchField:_This.searchField
            };

            postData.startDate=_This.startDate==""?"":Date.parse(_This.startDate);
            postData.endDate=_This.endDate==""?"":Date.parse(_This.endDate);
            // postData.startDate=_This.startDate==""?"": _.date2String(_This.startDate,"yyyy-MM-dd ");
            // postData.endDate=_This.endDate?"": _.date2String(_This.endDate,"yyyy-MM-dd ");
            if(_This.fieldValue==""){
                postData.searchField="";
            }
            _.ajax({
                url: '/triage/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if(result.code==0&&result.data){
                        console.log("============================",result.data);
                        _This.aTriagelist = result.data.list;
                        _This.count = result.data.count;
                    }
                }
            }, 'withCredentials');
        },
        fSearchData(e){
            this.searchData();
        },
        handleClick(){
            this.fieldValue="";
            this.searchData();
        },
        // 显示和隐藏电话号码（只针对点击的当前行）
        openPhone(index,otype){
            // console.log(index ,otype);
            let temp = this.aTriagelist;
            temp[index].willShow = otype;
            this.aTriagelist = [];
            this.aTriagelist = temp;
        },
        closePhone(index,otype){
            // console.log(index ,otype);
            let temp = this.aTriagelist;
            temp[index].willShow = otype;
            this.aTriagelist = [];
            this.aTriagelist = temp;
        },

        fDateChange(date){
            this.searchData();
        },
        fRefresh(){
            this.searchData();
        },
        fEdit(){
            //console.log("edit data");
        },
        fMoreUserInfo(){
           // console.log("get more user info");
        },
        handleCurrentChange(pnum){
           console.log(pnum);
            this.pageNo=pnum;
            this.searchData();
        },

        fCustomerDetail(uid){
            if(!uid){
                return false;
            }
            this.$router.push({path:'/customerinfo/'+uid});
        }

    }
}