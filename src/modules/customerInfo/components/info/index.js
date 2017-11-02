export default {
    components: {},
    data () {
        return {
            // oCustomer: {}
        }
    },
    created() {

    },
    filters: {
        genderFilter: function (input) {
            if (input == 0) {
                return "男";
            } else if (input == 1) {
                return "女";
            } else {
                return "未知";
            }
        },
        maritalFilter: function (input) {
            if (input == 0) {
                return "已婚";
            } else if (input == 1) {
                return "未婚";
            } else {
                return "其他";
            }
        }
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {}
}