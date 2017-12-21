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
            oInaugural:[{key:"全职"},{key:"兼职"}]
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