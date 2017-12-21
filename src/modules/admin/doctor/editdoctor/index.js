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
        }
    },
    watch: {
        $route(){
        }
    }
}