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
        fCreateDoctor(){
            this.$router.push("/admin/doctor/edit");
        },
        gohome(){
            this.$router.push("/");
        },
        handleCurrentChange(){

        }
    },
    watch: {
        $route(){
        }
    }
}