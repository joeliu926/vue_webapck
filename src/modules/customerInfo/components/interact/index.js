export default {
    components: {},
    data () {
        return {

        }

    },
    created() {
 
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            document.body.scrollTop = anchor.offsetTop; // chrome
           document.documentElement.scrollTop = anchor.offsetTop; // firefox
        }

    }
}