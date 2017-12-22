/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            pageNo: 1,
            pageSize: 15,
            count:1,
            cliniclist:'诊所列表',
            aClinicList:[],
        };
    },
    created() {
        let postData = {
            faceId:""
        };
        _.ajax({
            url: '/admin/clinic/test',
            method: 'POST',
            data: postData,
            success: function (result) {
                console.log("test--------", result);


            }
        }, 'withCredentials');
    },
    mounted(){
        let currentCity="";

    },
    destroyed() {

    },
    methods: {
        fEditClinic(){
            this.$router.push("/admin/clinic/edit");
        },
        handleCurrentChange(){

        },
        fCreateDoctor(){
            this.$router.push("/admin/clinic/edit");
        }
    },
    watch: {}
}