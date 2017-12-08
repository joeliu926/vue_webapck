export default {
    components: {},
    data () {
        return {
            count: 0,
            total:0,
            pageNo: 1,
            pageSize:12,
            status:1,
            repage:1,
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
            aCustomerlist: [],
            show:0
        }

    },
    created() {
        this.ready();
        let _This=this;
        _This.aCustomerlist;
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
        //
        ready(){
            console.log("=============000000000000================");

             var _This = this;
             _.ajax({
                 url: '/triage/list',
                 method: "POST",
                 data: {
                     pageNo:_This.pageNo,
                     pageSize:_This.pageSize,
                     status:0,
                     // repage:_This.repage
                 } ,
                 success: function (result) {
                     console.log(result);

                     if(result.code==0&&result.data){
                         console.log(result.data);
                         _This.aCustomerlist = result.data.list;
                         _This.count=result.data.count;
                         console.log(_This.aCustomerlist);
                         console.log(_This.count)
                         // if( _This.aCustomerlist&& _This.aCustomerlist!==[]){
                         //     _This.count=Math.ceil(_This.aCustomerlist.length/_This.pageSize);
                         //     console.log(_This.count);
                         // }

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
        // 显示和隐鲹电话号码
       
        openEyePhone(){
           
        },

        pickerOptions(){},
        fDateChange(date){
            this.searchData();
        },
        fRefresh(){
            this.searchData();
        },
        fEdit(){
            console.log("edit data");

        },
        fMoreUserInfo(){
            console.log("get more user info");
        },
        handleCurrentChange(pnum){
            this.pageNo=pnum;
            this.ready();
        },
        searchData(){
            var _This = this;
            var postData={
                pageNo: _This.pageNo,
                pageSize:  _This.pageSize,
                /*     startDate: _This.startDate,
                 endDate: _This.endDate,*/
                fieldValue:_This.fieldValue,
                searchField:_This.searchField

            };

            postData.startDate=_This.startDate==""?"":Date.parse(_This.startDate);
            postData.endDate=_This.endDate==""?"":Date.parse(_This.endDate);
            if(_This.fieldValue==""){
                postData.searchField="";
            }
            _.ajax({
                url: '/customers/customerlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if(result.code==0&&result.data){
                        _This.aCustomerlist = result.data.list;
                        _This.count = result.data.count;
                    }


                }
            }, 'withCredentials');
        },
        fCustomerDetail(uid){
            if(!uid){
                return false;
            }
            this.$router.push({path:'/customerinfo/'+uid});
        }

    }
}