
export default {
    components: {

    },
    data () {
        return {

            acaseuserlist:{
                id:"",
                doctorName:"",
                customerGender:"",
                customerName:'',
                customerLogo:"",
                customerAge:"",
                frondFile:"",
                productName:"",
                hospitalName:"",
                productName:"",
                operationDate:_.date2String(new Date(),"yyyy-MM-dd"),
                frondFile:{},
                backFile:{},
            },
            contentList:[],



            slideList: [
                {
                    //"image": "http://dummyimage.com/1745x492/f1d65b"
                    "image": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3e1335a6-42c4-43cb-b287-4b1b5c3a8c7f"

                },
                {
                    "image": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/c47b9cb5-aaf7-4248-a055-3460d2468e09"
                    //"image": "http://dummyimage.com/1745x492/40b7ea"
                },
                {
                    "image": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3ac8d28f-040e-486c-a145-0d4cf027bec8"
                    //"image": "http://dummyimage.com/1745x492/e3c933"
                }
            ],
            currentIndex: 0,
            timer: '',
            reveal:false
        }
    },
    created() {
        this.reday();

    },
    mounted(){

    },
    destroyed() {

    },
    filters:{
        dateFilter:function (input) {
            if(input&&input!=""){
                return  _.date2String(new Date(input),"yyyy-MM-dd");
            }
        },
        Gender:function(input){
            if(input&&input=="1"){
                return "男";
            };
            if(input&&input=="2"){
                return "女";
            };
            if(input&&input!="1"&&input!="2"){
                return "other";
            };

        }   ,
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        }
    },
    methods: {
        reday(){
            console.log('0000000000000000')
            var _This = this;
            _.ajax({
                url: '/case/casedetail',
                method: 'POST',
                data: {caseid:1} ,
                success: function (result) {
                    console.log(result);
                    
                    if(result.code==0&&result.data){
                        console.log(result.data);
                        _This.acaseuserlist = result.data;
                        _This.contentList = result.data.contentList;
                        _This.count = result.data.count;



                    }
                }
            }, 'withCredentials');
        },
        add(){
            this.currentIndex++;
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0;
            }
        },
        reduce(){
            this.currentIndex--;
            if (this.currentIndex = 0) {
                this.currentIndex = this.slideList.length - 1;
            }
        },
        change(index) {
            this.currentIndex = index;
        },
        //autoPlay() {
        //    this.currentIndex++
        //    if (this.currentIndex > this.slideList.length - 1) {
        //        this.currentIndex = 0
        //    }
        //},
        closeLayer(){
            this.reveal=false;
        },
        showLayer(){
            this.reveal=true;
            var _This = this;
            var postData={
                pageNo: _This.pageNo,
                pageSize:  _This.pageSize,
                /*     startDate: _This.startDate,
                 endDate: _This.endDate,*/
                fieldValue:_This.fieldValue,
                searchField:_This.searchField

            };
            //_.ajax({
            //    url: '',
            //    method: 'GET',
            //    data: postData,
            //    success: function (result) {
            //        if(result.code==0&&result.data){
            //            _This.aCustomerlist = result.data.list;
            //            _This.count = result.data.count;
            //        }
            //
            //
            //    }
            //}, 'withCredentials');
        },

    }
}