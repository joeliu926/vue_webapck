export default {
    components: {},
    data () {
        return {
            pageNo: 1,
            pageSize: 15,
            searchField: "name",
            fieldValue:"",
            startDate: "",
            endDate: "",
            name: "",
            phoneNum: "13455555555",
            wechatNum: "wechat",
            customerBlock: "联系人",
            title: "../../common/img/gaoji2.png",
            customerName: "this is a user",
            count: 0,
            aCustomerlist: []
        }

    },
    created() {
        this.searchData();
    },
    mounted(){

    },
    destroyed() {

    },
    filters:{
      dateFilter:function (input) {
          if(input&&input!=""){
              return  _.date2String(new Date(input),"yyyy-MM-dd hh:mm:ss");
          }
      },
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        }
    },
    methods: {
        fSearchData(e){

            this.searchData();
        },
        handleClick(){
            this.fieldValue="";
            this.searchData();
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
            this.searchData();
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
            console.log("------postData-----",postData);

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

                    console.log("------result-----",result);

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