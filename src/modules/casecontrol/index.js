export default {
    components: {

    },
    data () {
     return{
         isCurrentProject:"0",
         isDocProject:"0",
         isSelectItem:true,
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
         imgdata: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1]
     }
    },
    created() {

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
        }
    }
}