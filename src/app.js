/**
 * Created by JoeLiu on 2017-9-15.
 */

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

    },
    destroyed() {

    },
    methods: {
        intext(){
            this.$router.push('/test');
        },
        activeIndex(){},
        handleSelect(){}
    }
}