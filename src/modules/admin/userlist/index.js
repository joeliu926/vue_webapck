/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../tree/index.vue';
export default {
    components: {
        tree},
    data () {
        return {
            pageNo: 1,
            pageSize: 15,
            count:1,
            userlist:[],
            searchKey:''
        };
    },
    created() {
        this.getRolelist(1);
    },
    mounted(){
    },
    destroyed() {

    },
    filters:{
        /**
         * 角色过滤
         * @param input
         * @returns {*}
         */
        rolesFilter:function (input) {
            if(!input||!Array.isArray(input)){
                return "";
            }
            let result=[];
            input.forEach(item=>{
                result.push(item.name);
            });
            return result.join("、");
        }
    },
    methods: {
        createUser(){
            this.$router.push("/admin/userlist/edit/_EPT");
        },
        handleCurrentChange(params){
            this.getRolelist(params);
        },
        getRolelist(params){
            let _this = this;
            this.pageNo = params;
            let _data={
                pageNo:params,
                pageSize:this.pageSize,
                name:this.searchKey
            }
            _.ajax({
                url: '/admin/userrole/userlist',
                method: 'POST',
                data:_data,
                success: function (result) {
                    //console.log("search------------",result);
                    if (result.code == 0 && result.data) {
                        _this.userlist = result.data.list;
                        _this.count = result.data.count;

                        _this.userlist.forEach(m=>{
                            m.status = m.status ==0?"正常":"已删除";
                        });
                    }
                }
            }, 'withCredentials');
        },
        searchUser(){
            this.getRolelist(1);
        },
        resetPassword(){

        },
        userEdit(params){
            this.$router.push("/admin/userlist/edit/" + params);
        },
        userDelete(params){
            let _this = this;
            let _data={
                userId:params
            }


            this.$confirm('确认删吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                _.ajax({
                    url: '/admin/userrole/deleteuser',
                    method: 'POST',
                    data:_data,
                    success: function (result) {
                        if (result.code == 0 && result.data) {
                            _this.getRolelist(1);
                        }else{
                            _this.$message.error("删除失败");
                        }
                    }
                }, 'withCredentials');
            }).catch(() => {

            });


        }
    }
}