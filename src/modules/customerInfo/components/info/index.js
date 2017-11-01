export default {
    components: {},
    data () {
        return {
           // oCustomer: {}
        }
    },
    created() {
        console.log("-------------------------------");
        console.log(this.$parent.oCustomer);
    },
    mounted(){
        console.log("+++++++++++++++++++++++");
        console.log(this.$parent.oCustomer);
    },
    destroyed() {

    },
    methods: {


    }
}