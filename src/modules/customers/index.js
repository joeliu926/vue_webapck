export default {
    components: {},
    data () {
        return {
            pageNo: 1,
            pageSize: 1,
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
    methods: {
        fSearchData(e){
            this.searchData();
        },
        handleClick(){
            this.fieldValue="";
        },
        pickerOptions(){

        },
        fRefresh(){
            console.log("refresh");
        },
        fEdit(){
            console.log("edit data");

        },
        fMoreUserInfo(){
            console.log("get more user info");
        },
        handleCurrentChange(pnum){
            this.pageNo=pnum;
            console.log(Date.parse(new Date()));
            this.searchData();
        },
        searchData(){
            var _This = this;
            var postData={
                pageNo: _This.pageNo,
                pageSize:  _This.pageSize,
                startDate: _This.startDate,
                endDate: _This.endDate,
                searchField:_This.searchField,
                fieldValue:_This.fieldValue
            };
            if(_This.fieldValue==""){
                postData.searchField="";
            }

            _.ajax({
                url: '/customers/customerlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log(result);
                    if(result.code==0&&result.data){
                        _This.aCustomerlist = result.data.list;
                        _This.count = result.data.count;
                    }
           

                }
            }, 'withCredentials');
        }

    }
}