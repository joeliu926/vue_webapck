import info from './components/info/index.vue';
import interact from './components/interact/index.vue';
import member from './components/member/index.vue';
import right from './components/right/index.vue';
import top from './components/top/index.vue';

export default {
    components: {
        interact,
        member,
        right,
        top,
        info
    },
    data () {
        return {
            oCustomer:{
                id:"",
                name:"",
                filenum:"",
                gender:"",
                birthday:"",
                nation:"",
                maritalStatus:"",
                education:"",
                phoneNum:"",
                phoneAddress:"",
                email:"",
                postcode:"",
                wechatNum:"",
                qqNum:"",
                job:"",
                companyName:"",
                socialInsuranceNum:"",
                source:"",
                comment:"",

            },
            oConsults:[{

                "tenantId": "",
                "id": "",
                "page": "",
                "createDate": "",
                "status": "",
                "counselorName": "",
                "consultWay": "",
                "consultProject": "",
                "updateTime": "",
                "consultType": "",
                "remark": "",
                "createTime": "",
                "customerId": ""

            }],
            fileList:[]
        }
    },

    created() {
        this.fSearchData();
        this.fConsultRecord();
        this.getFileList();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        //查询日期
        fSearchData(){
            let _This = this;
            let uid= _This.$route.params.id;
            if(!uid){
                _This.$router.push('/customers');
            }
            let postData = {
                id: uid
            };
            _.ajax({
                url: '/customers/detail',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _This.oCustomer = result.data;
                        for (var item in _This.oCustomer)
                        {
                           /* if(item=='birthday'){
                                _This.oCustomer[item] =_This.oCustomer[item].length>0?_This.oCustomer[item]: "1900-01-01";
                            }else{*/
                                _This.oCustomer[item] =_This.oCustomer[item].length>0?_This.oCustomer[item]: "无";
                            /*}*/
                        }
                    }else {
                       // _This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        //咨询记录
        fConsultRecord(){
            let _This = this;
            let uid= _This.$route.params.id;
            let postData = {
                id: uid
            };
            _.ajax({
                url: '/customers/records',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log('result.data',result.data);
                    if (result.code == 0 && result.data) {
                        result.data.forEach(item=>{
                            item.createTime = _.date2String(new Date(item.createTime),'yyyy-MM-dd');
                        });
                        _This.oConsults = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        //获取客户文件
        getFileList(){
            let _This = this;
            let uid= _This.$route.params.id;
            let postData = {
                customerId: uid
            };
            _.ajax({
                url: '/customers/filelist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("+++++++++++",result.data);
                    if (result.code == 0 && result.data) {
                        _This.fileList = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        //
        showMore(){

        }

    }
}