
export default {
    components: {
    },
    data () {
        return {
            aCustomerlist:[
            ],
            aWaitinglist:[
            ],
            todayCount:0,
            aEndList:[],
            count:0,
            pageSize:3,
            pageNo: 1,
            total:0
        }
    },
    created() {
let _This=this;
_This.fGetWaitingList();
_This.fGetEndList();
    },
    mounted(){

    },
    destroyed() {

    },
    filters:{
      dateFilter:function (input,format) {
          format=format||"yyyy-MM-dd hh:mm:ss";
          if(input&&input!=""){
              return  _.date2String(new Date(input),format);
          }
        },
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        },
        projectFilter:function (input) {

            if(!input||input==""||typeof(input)!="object"){
               return "";
            }
            let result="";
            input.forEach(item=>{
                result+=item.projectName+"、"
            });
            return  result.trim();
        }
    },
    methods: {
        changedate(){

        },
        initData(){

        },
        handleCurrentChange(){

        },
        fSeaPhone(){

        },
        fClosePhone(){

        },
        fGetWaitingList(){
            let postData={};
            let _This=this;
            _.ajax({
                url: '/faceDiagnose/getwaitinglist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("waiting result--------",result);

                    if(result.code==0&&result.data){
                        result.data=result.data.sort(function (itemOne,itemTwo) {
                            return itemOne[0].faceDiagnoseDate>itemTwo[0].faceDiagnoseDate;
                        });
                        _This.aWaitinglist=result.data;
                         let latest=_.date2String((new Date(_This.aWaitinglist[0][0].faceDiagnoseDate)),"yyyy-MM-dd");
                         let today=_.date2String((new Date()),"yyyy-MM-dd");
                          if(today==latest){;
                           _This.todayCount=_This.aWaitinglist[0].length;
                        }
                    }
                }
            }, 'withCredentials');
        },
        fGetEndList(){
            let _This=this;
            let postData={
                pageNo:_This.pageNo,
                pageSize:_This.pageSize
            };
            _.ajax({
                url: '/faceDiagnose/getendlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    //console.log("end result--------",result);
                    if(result.code==0&&result.data){
                        _This.aEndList=result.data.list;
                        _This.count=result.data.count;
                    }
                }
            }, 'withCredentials');
        },
        handleCurrentChange(pnum){
            this.pageNo=pnum;
           this.fGetEndList()
        }
    }
}