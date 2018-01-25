/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';
import CONSTANT from '../../../../common/utils/constants.js';
import VAREGEX from '../../../../common/utils/valregex.js';
export default {
    components: {
        tree
    },
    data() {
        return {
            targetUrl: "", //需要同步案例的url
        };
    },
    created() {
    },
    mounted() {
    },
    destroyed() {

    },
    methods: {
        fEditClinic() {
            //console.log("edit clinic-----");
        },
        /**
         * 同步案例
         */
        fSyncData() {
            let _This = this;
            if(!_This.targetUrl||!/^http\S+$/.test(_This.targetUrl)){
                _This.$message.error("URL错误！");
                return false;
            }
            let postData = {
                targetUrl: _This.targetUrl
            };
            let loading = _This.$loading({
                text: 'Loading'
            });
            _.ajax({
                url: '/admin/grab/single',
                method: 'POST',
                data: postData,
                success: function(result) {
                    loading.close();
                    if(result.code == 0) {
                        _This.$message({message: '同步成功',
                            type: 'success'
                        });
                        _This.$router.push("/admin/backcaselist");
                    }else {
                        _This.$message.error(result.data);
                    }
                }
            }, 'withCredentials');
        }
    },
    watch: {

    }
}