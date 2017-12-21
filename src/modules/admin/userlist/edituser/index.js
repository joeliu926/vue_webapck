/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../../tree/index.vue';
export default {
    components: {tree},
    data () {
        return {
            doctoredit:'用户编辑',
            gender:"0",
            checked:true,
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
        fEditSave(){

        },
        fEditCancel(){
            this.$router.push("/admin/doctor");
        },
        fSelectGoodAtItem(item){
this.inauguralState=item;
        },
        fGetGoodAtList(){

        },
        resetPassword(){
            
        }
    },
    watch: {
        $route(){
        }
    }
}