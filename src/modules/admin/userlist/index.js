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
    methods: {
        createUser(){
            this.$router.push("/admin/userlist/edit");
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
                    if (result.code == 0 && result.data) {
                        _this.userlist = result.data.list;
                        _this.count = result.data.count;

                        _this.userlist.forEach(m=>{
                            m.status = m.status ==1?"正常":"";
                        });

                    }else {
                        // _This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        searchUser(){
            this.getRolelist(1);
        },
        resetPassword(){

        }
    }
}