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
        },
        dateFilter:function (input) {
            if(input!=""){
                return  _.date2String(new Date(input),"yyyy-MM-dd");
            }
        },
        phoneFilter:function (input) {
            if(input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        },
        idCardFilter:function (input) {
            if(input!=""){
                return input.replace(/(\d{6})\d{8}(\d{4})/,"$1********$2");
            }
        }
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {}
}