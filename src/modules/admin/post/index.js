/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        let defaultl=require("../../../common/img/login_logo.png");
        return {
        };
    },
    filters:{
    },
    created() {
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        fGetClinicDetail(){
            let _This = this;
            let clinicid = _This.oClinicData.clinicId;
            let postData = {
                id: clinicid
            };
            _.ajax({
                url: '/admin/clinic/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if(result.code == 0 && result.data) {
                        _This.oClinicData = result.data;
                    }
                }
            }, 'withCredentials');
        },
        fCreateMap(){
        	 // var map = new BMap.Map("map-content");
        },
    },
    watch: {}
}