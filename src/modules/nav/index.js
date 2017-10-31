/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {

    },
    data () {
     return {};
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        incustomers(){
            this.$router.push("/customers");
        },
        intest(){
            this.$router.push("/test");
        },
        inhome(){
            this.$router.push("/home");
        },
        fChooseItem(){
            console.log("click----");
        }
    }
}