
export default {
    components: {
    },
    data () {
        return {
            aCustomerlist:[],
            count:0,
            pageSize:1,
            total:0
        }
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    filters:{
      dateFilter:function (input) {
          if(input&&input!=""){
              return  _.date2String(new Date(input),"yyyy-MM-dd hh:mm:ss");
          }
      },
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        }
    },
    methods: {
        changedate(){

        },
        initData(){

        },
        handleCurrentChange(){

        }


    }
}