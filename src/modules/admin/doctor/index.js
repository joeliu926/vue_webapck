/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../tree/index.vue';
export default {
    components: {
        tree},
    data () {
        return {
            pageNo: 1,
            pageSize: 15,
            count:1,
            doctorlist:'医生列表',
            aDoctorlist:[],
            oDoctor:{
                "age": 0,
                "brief": "",
                "clinicId": 0,
                "duty": "",
                "gender": "",
                "id": 0,
                "image": "string",
                "jobCategory": "string",
                "jobExperience": 0,
                "jobTitle": "string",
                "loginName": "string",
                "name": "string",
                "picture": "string",
                "specialty": "",
                "tenantId": 0
            }
        };
    },
    created() {
        let _this = this;
        _this.fGetDoctorList();

    },
    filters:{
        dateFilter:function () {

        },
        genderFilter:function(input){
            let result="其他";
            if(input=="1"){
                result= "男";
            }else if(input=="2"){
                result= "女";
            }
            return result;
        }
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        fCreateDoctor(){
            this.$router.push("/admin/doctor/edit");
        },
        gohome(){
            this.$router.push("/");
        },
        handleCurrentChange(num){
           let _This=this;
            _This.pageNo=num;
            _This.fGetDoctorList();
        },
        /**
         * 获取医生列表
         */
        fGetDoctorList(){
            let _This=this;
            let postData = {
                pageNo: _This.pageNo,
                pageSize: _This.pageSize
            };
            _.ajax({
                url: '/admin/doctor/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("doctor--list--------", result);
                    if(result.code==0&&result.data.list.length>0){
                        _This.aDoctorlist=result.data.list;
                    }
                }
            }, 'withCredentials');
        }
    },
    watch: {
        $route(){
        }
    }
}