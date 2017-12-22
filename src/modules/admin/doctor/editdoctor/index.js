/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../../tree/index.vue';
export default {
    components: {tree},
    data () {
        return {
            doctoredit:'医生编辑',
            gender:"0",
            inauguralState:"",
            oInaugural:[{key:"外聘专家"},{key:"坐诊医生"}],
            oJobTitle:["医师","主治医师","副主任医师","主任医师"],
            oDoctor:{
                "age": 0,
                "brief": "",
                "clinicId": 0,
                "duty": "",
                "gender": "",
                "id": 0,
                "image": "",
                "jobCategory": "",
                "jobExperience": 0,
                "jobTitle": "",
                "loginName": "",
                "name": "",
                "picture": "",
                "specialty": "",
                "tenantId": 0
            }
        };
    },
    created() {
        let _this = this;

    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        goback(){
        },
        gohome(){
            this.$router.push("/");
        },
        fEditSave(){
            let _This=this;
            let postData = _This.oDoctor;
            _.ajax({
                url: '/admin/doctor/create',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("doctor--create--------", result);
                    if(result.code==0&&result.data){

                    }
                }
            }, 'withCredentials');
        },
        fEditCancel(){
            this.$router.push("/admin/doctor");
        },
        fSelectGoodAtItem(item){
this.inauguralState=item;
        },
        fGetGoodAtList(){

        }
    },
    watch: {
        $route(){
        }
    }
}