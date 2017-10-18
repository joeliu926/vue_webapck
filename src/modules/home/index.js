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
            console.log($('body').html());
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {

    }
}