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

            }, {
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

                }]

        }
    },

    created() {
        this.fSearchData();
        this.fConsultRecord();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
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
                   // console.log(result);
                    if (result.code == 0 && result.data) {
                        _This.oCustomer = result.data;
                    }else {
                       // _This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        fConsultRecord(){
            let _This = this;
            let uid= _This.$route.params.id;
            let postData = {
                id: uid
            };
            _.ajax({
                url: '/consults/getrecords',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _This.oConsults = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        }

    }
}