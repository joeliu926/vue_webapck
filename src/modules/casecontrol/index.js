export default {
    components: {

    },
    data () {
     return{
         isConScreanItem:false,
         isCurrentProject:"0",
         isDocProject:"0",
         isSelectItem:false,
         dialogVisible:false,
         activeStatus:"success",
         endProjects: ['鼻子整形', '脸部整形', '下巴整形', '其他整形','哈哈哈哈'],
         otheritems:"",
         otherresion:"",
         bookdate:"",
         consultItems:[],
         customerName:"",
         customerinfoP:false,
         gender:0,
         birthday:"",
         dCurrentDate:"",
         sTimer:"00:00:00",
         dTimer:0,
         imgdata: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1]
     }
    },
    created() {
        let _This=this;
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

        }
    },
    mounted(){


    },
    destroyed() {

    },
    methods: {
        fLogin(){
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
        fCloseEnddialog(){
            let _This=this;
            _This.dialogVisible = false;
        },
        fCloseCustomerInfo(){
            this.customerinfoP=true;
        },
        fOpenCustomerInfo(){
            this.customerinfoP=false;
        },
        fConnectDevice(){
            this.isConScreanItem=true;
        },
        fCloseConBox(){
            this.isConScreanItem=false;
        }
    }
}