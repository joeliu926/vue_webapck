
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
            photolist:[],
            zoomPhoto:'',
            imgArr:[],
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
                url: '/case_base/casedetail',
                method: 'POST',
                data: {caseid:1} ,
                success: function (result) {
                    console.log(result);
                    
                    if(result.code==0&&result.data){
                        console.log(result.data);
                        _This.acaseuserlist = result.data;
                        _This.contentList=result.data.contentList;
                        console.log(_This.contentList);

                        _This.count = result.data.count;
                        // _This.contentList = result.data.contentList;
                        // // console.log(_This.contentList);

                        _This.contentList.forEach(m=>{
                            // console.log(m.files);
                            _This.photolist = _This.photolist.concat(m.files);
                        });
                        // console.log(_This.photolist);

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
        },
        
        reduce(){
            let plength=this.photolist.length;
            this.currentIndex-=1;
            if(this.currentIndex<0){
                this.currentIndex=plength-1;
            }
            this.zoomPhoto=this.photolist[this.currentIndex].url;
        },
        change(index) {
            this.currentIndex = index;
        },
        fromBefore(){
            var _This=this;
           _This.contentList= _This.contentList.sort(function(x, y){
                console.log(y.definitionDate > x.definitionDate);
                return y.definitionDate > x.definitionDate;
            });
        },
        fromNow(){
            var _This=this;
            _This.contentList= _This.contentList.sort(function(x, y){
                return x.definitionDate > y.definitionDate?1:-1;
            });
        },
        //autoPlay() {
        //    this.currentIndex++
        //    if (this.currentIndex > this.photolist.length - 1) {
        //        this.currentIndex = 0
        //    }
        //},
        closeLayer(){
            this.reveal=false;
        },
        showLayer(fileName){
            this.reveal=true;
            this.photolist.forEach((item,index)=>{
                if(fileName==item.name){
                    this.zoomPhoto = item.url;
                    this.currentIndex=index;
                }
            })
        },

    }
}