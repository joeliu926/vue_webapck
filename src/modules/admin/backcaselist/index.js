/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            input:'',
            input1:'',
            tableData: [
                {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            count: 0,
            total:0,
            pageNo: 1,
            pageSize:12,
            state:'',
            value:'',
            productName:'',
            loginName:"",

            doctorId:0,
            options:[
                {
                  value: '选项1',
                  label: '张医生'
                }, {
                  value: '选项2',
                  label: '李医生'
                }, {
                  value: '选项3',
                  label: '王医生'
                }, {
                  value: '选项4',
                  label: '龙医生'
                }, {
                  value: '选项5',
                  label: '赵医生'
                }],

        };
    },
    created() {
      this.getdata();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        getdata(){
            var _This = this;
            let   postData={
               pageNo:1,
               pageSize:10,
                productName:"",
                loginName:"",
                doctorId:1

            }
            _.ajax({
                url: '/admin/backcase/backcaselist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("============",result);

                }
            }, 'withCredentials');
        },




        delete(id){

        },

        search(){

        },
        handleCurrentChange(pnum){
            this.pageNo=pnum;

        },
        handleIconClick(){

        },
        querySearch(){

        }
    },
    watch: {

    }
}