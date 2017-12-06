
export default {
    components: {

    },
    data () {
        return {
            isActive:false,
            hasError:false,
            isCollapse:true,
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
            imgArr:[],
            currentIndex: 0,
            timer: '',
            reveal:false,
            zoomPhotoName:'',
            isclick_before:''
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
            var _This = this;
            let uid= _This.$route.params.id;
            _.ajax({
                url: '/case_base/casedetail',
                method: 'POST',
                data: {caseid:uid},
                success: function (result) {
                    if(result.code==0&&result.data){
                        _This.acaseuserlist = result.data;
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
        add(){
            let plength=this.photolist.length;
            this.currentIndex+=1;
            if(this.currentIndex>plength-1){
                this.currentIndex=0;
            }
            this.zoomPhoto=this.photolist[this.currentIndex].url;
            this.zoomPhotoName=this.photolist[this.currentIndex].name;
        },
        
        reduce(){
            let plength=this.photolist.length;
            this.currentIndex-=1;
            if(this.currentIndex<0){
                this.currentIndex=plength-1;
            }
            this.zoomPhoto=this.photolist[this.currentIndex].url;
            this.zoomPhotoName=this.photolist[this.currentIndex].name;
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
        setPhone(type){
            let setObje =null;
            let uid= this.$route.params.id;

            if(type==0){
                this.isclick_before = 'before';
                setObje = {caseid:uid,beforePic:this.zoomPhotoName,afterPic:''}
            }else{
                this.isclick_before = 'after';
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