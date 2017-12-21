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
            userlist:[],
        };
    },
    created() {
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        createUser(){
            this.$router.push("/admin/userlist/edit");
        },
        handleCurrentChange(){

        },
        searchUser(){

        },
        resetPassword(){
            
        }
    },
    watch: {
        $route(){
        }
    }
}