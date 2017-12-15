
export default {
    components: {

    },
    data () {
        return {
            isActive:false,
            // hasError:false,
            // isCollapse:true,
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
            contentListAfter:[],
            photolist:[],
            zoomPhoto:'',
            zoomPhotoName:'',//图片id
            imgArr:[],
            currentIndex: 0,
            timer: '',
            reveal:false,
            isclick_before:'',
            isclick_after:''
            
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
                return  _.date2String(new Date(input),"yyyy-MM-dd");//hh:mm:ss
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
            var _This = this;
            let uid= _This.$route.params.id;
            _.ajax({
                url: '/case_base/casedetail',
                method: 'POST',
                data: {caseid:uid},
                success: function (result) {
                    console.log("casedetail",result);
                    if(result.code==0&&result.data){
                        _This.acaseuserlist = result.data;
                        console.log(_This.acaseuserlist);
                        _This.contentList=result.data.contentList;
                        _This.count = result.data.count;
                        _This.contentList&& _This.contentList.forEach(m=>{
                            _This.photolist = _This.photolist.concat(m.files);

                            if(m.nodeType==1){

                                _This.contentListAfter.push(m);
                            }
                        });
                    }
                }
            }, 'withCredentials');
        },
       
        change(index) {
            this.currentIndex = index;
        },
        fromBefore(){
            var _This=this;
           _This.contentListAfter= _This.contentListAfter.sort(function(x, y){
                console.log(y.definitionDate > x.definitionDate);
                return y.definitionDate > x.definitionDate;
            });
            this.isActive =false;
        },
        fromNow(){
            var _This=this;
            _This.isActive=true;
            _This.contentListAfter= _This.contentListAfter.sort(function(x, y){
                return x.definitionDate > y.definitionDate;
            });
            this.isActive =true;

        },
         add(){
            let plength=this.photolist.length;
            this.currentIndex+=1;
            if(this.currentIndex>plength-1){
                this.currentIndex=0;
            };
            this.zoomPhoto=this.photolist[this.currentIndex].url;
            this.zoomPhotoName=this.photolist[this.currentIndex].name;
            // 图片轮播的时候对应得按钮进行状态的选中
            if(this.zoomPhotoName==this.acaseuserlist.frondFile.name){
                console.log(true);
                this.isclick_before="before";
            }else{
                this.isclick_before="";
            };
             // 图片轮播的时候对应得按钮进行状态的选中  after
            if(this.zoomPhotoName==this.acaseuserlist.backFile.name){
                console.log(true);
                this.isclick_after="after";
            }else{
                this.isclick_after="";
            };
        },
        reduce(){
            let plength=this.photolist.length;
           
            // console.log(beforeBtn);
            this.currentIndex-=1;
            if(this.currentIndex<0){
                this.currentIndex=plength-1;
            }
            this.zoomPhoto=this.photolist[this.currentIndex].url;
            this.zoomPhotoName=this.photolist[this.currentIndex].name;
            // 图片轮播的时候对应得按钮进行状态的选中  before
            if(this.zoomPhotoName==this.acaseuserlist.frondFile.name){
                console.log(true);
                this.isclick_before="before";
            }else{
                this.isclick_before="";
            }
            // 图片轮播的时候对应得按钮进行状态的选中  after
            if(this.zoomPhotoName==this.acaseuserlist.backFile.name){
                console.log(true);
                this.isclick_after="after";
            }else{
                this.isclick_after="";
            }
        },
        setPhone(type){
            let setObje =null;
            let uid= this.$route.params.id;
            console.log("++++++++",uid);
            if(type==0){
                this.isclick_before = 'before';
                setObje = {caseid:uid,beforePic:this.zoomPhotoName,afterPic:''}
            }else{
                this.isclick_after = 'after';
                setObje = {caseid:uid,beforePic:'',afterPic:this.zoomPhotoName}
            }

            var _This = this;
            _.ajax({
                url: '/case_base/setfacephone',
                method: 'POST',
                data: setObje ,
                success: function (result) {
                    if(result.code==0&&result.data){
                        console.log('result',result);

                    }
                    //解决设置案例封面的时候出现的重复数据
                    _This.contentListAfter=[];
                    //封面设置需要重新调用
                    _This.reday();
                }
            }, 'withCredentials');
         
        },

        closeLayer(){
            this.reveal=false;
            this.isclick_before = '';
        },
        showLayer(fileName){
            this.reveal=true;

            this.zoomPhotoName=fileName;

            this.photolist.forEach((item,index)=>{
                if(fileName==item.name){
                    this.zoomPhoto = item.url;
                    this.currentIndex=index;
                }
            })
        },

    }
}