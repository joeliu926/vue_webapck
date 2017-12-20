/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {

    },
    data () {
        let _this=this;

        return {
            showdata:null,
        }
    },
    created() {
            this.showdata = 'hello boy';

    },
    mounted(){
        var map = new BMap.Map("container");
        console.log("map------->",map);
        var point = new BMap.Point(116.404, 39.915);
        console.log("point------->",point);
        map.centerAndZoom(point, 15);
        // map.centerAndZoom(point, 15);
    },
    destroyed() {

    },
    methods: {
        fGetDoctors(){
         console.log("get doctor list");
        }
    }
}