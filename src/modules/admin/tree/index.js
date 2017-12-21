/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {},
    data() {
        return {
            checkedKeys:[1,2],
            treeData:
            [
                {
                    id:'admin_admin',
                    label: '管理',
                    linkUrl:'',
                    hightline:false,
                    needinit:false,
                    color:'#3542f1'

                },
            {
                id:'admin_user',
                label: '用户',
                linkUrl:'',
                hightline:false,
                children: [{
                    id:'admin_user_user',
                    label: '用户',
                    linkUrl:'',
                    hightline:true,
                    needinit:true

                },{
                    id:'admin_user_role',
                    label: '角色',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }]
            },
            {
                id:'admin_clinic',
                label: '诊所',
                linkUrl:'',
                hightline:false,
                needinit:false,
                children: [{
                    id:'admin_clinic_info',
                    label: '诊所信息',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_prod',
                    label: '项目',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_doctor',
                    label: '医生',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_case',
                    label: '案例',
                    linkUrl:'',
                    hightline:false,
                    needinit:false
                }]
            },
            {
                id:'admin_environ',
                label: '环境',
                linkUrl:'',
                hightline:false,
                needinit:false,
                color:'#3542f1'
            },
            {
                id:'admin_log',
                label: '日志',
                linkUrl:'',
                hightline:false,
                needinit:false,
                children: [{
                    id:'admin_log_login',
                    label: '登陆日志',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_log_operate',
                    label: '操作日志',
                    linkUrl:'',
                    hightline:false,
                    needinit:false

                }]
            }]
        };
    },
    created() {

    },
    mounted(){
        //document.querySelector('#admin_user_role').parentNode.className += ' el-tree-hight';
    },
    destroyed() {

    },
    methods: {
        handleNodeClick(data) {
            this.removeAllHightLine();
            let tickPoint =data.id.split('_');
            if(tickPoint.length>2){
                data.hightline =true;
            }
        },
        renderContent(h, { node, data, store }) {
            if(node.data.hightline){
                this.setHightline(node.data.id)
            }else{
                this.removeHightline(node.data.id)
            }
            if(node.data.color){
                return (
                    <span id={data.id} on-click={ () => this.handleNodeClick(data) } style="align-items: center; justify-content: space-between; width:100%;font-size: 14px; padding-right: 8px;color:#3542f1;">
                    <span>
                    <span>{node.label}</span>
                </span>
                </span>
                );

            }else{
                if(node.data.needinit)
                {
                    return (
                        <span id={data.id} on-click={ () => this.handleNodeClick(data) } style="align-items: center; justify-content: space-between;width:100%; font-size: 14px; padding-right: 8px;">
                            <span>
                                <span>{node.label}</span>
                            </span>
                            <span  style="color:red; font-size:14px; padding-left:10px;">●</span>
                        </span>
                    );
                }else{
                    return (
                    <span id={data.id} on-click={ () => this.handleNodeClick(data) } style="align-items: center; justify-content: space-between; width:100%;font-size: 14px; padding-right: 8px;">
                        <span>
                            <span>{node.label}</span>
                        </span>
                    </span>
                    );
                }
            }

        },
        setHightline(params){
            this.$nextTick(function () {
                document.querySelector('#'+params).parentNode.className = 'el-tree-node__content el-tree-hight';
            })

        },
        removeHightline(params){
            this.$nextTick(function () {
                document.querySelector('#'+params).parentNode.className = 'el-tree-node__content';
            })
        },
        removeAllHightLine(params){
            this.treeData.forEach(m=>{
               m.hightline = false;
               m.children&&m.children.forEach(ms=>{
                   ms.hightline = false;
               })
            });
        }
    }
}