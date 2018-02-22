/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
"use strict";
export default {
    components: {},
    data() {
        return {
            checkedKeys:[1,2],
            treeData:
            [
               /* {
                    id:'admin_admin',
                    label: '管理',
                    linkUrl:'',
                    hightline:false,
                    needinit:false,
                    color:'#3542f1'
                },*/
            {
                id:'admin_user',
                label: '用户',
                linkUrl:'',
                hightline:false,
                children: [{
                    id:'admin_user_user',
                    label: '用户',
                    linkUrl:'/admin/userlist',
                    hightline:false,
                    needinit:false

                },{
                    id:'admin_user_role',
                    label: '角色',
                    linkUrl:'/admin/rolelist',
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
                    linkUrl:'/admin/clinic/detail',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_prod',
                    label: '项目',
                    linkUrl:'/admin/productcontrol',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_doctor',
                    label: '医生',
                    linkUrl:'/admin/doctor',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_clinic_case',
                    label: '案例',
                    linkUrl:'/admin/backcaselist',
                    hightline:false,
                    needinit:false
                },{
                    id:'admin_clinic_post',
                    label: '海报',
                    linkUrl:'/admin/post',
                    hightline:false,
                    needinit:false
                },{
                    id:'admin_clinic_gift',
                    label: '礼品',
                    linkUrl:'/admin/gift',
                    hightline:false,
                    needinit:false
                }]
            },
           /* {
                id:'admin_environ',
                label: '环境',
                linkUrl:'',
                hightline:false,
                needinit:false,
                color:'#3542f1'
            },*/
            {
                id:'admin_log',
                label: '日志',
                linkUrl:'',
                hightline:false,
                needinit:false,
                children: [{
                    id:'admin_loglogin',//admin_log_login
                    label: '登陆日志',
                    linkUrl:'/admin/log',
                    hightline:false,
                    needinit:false

                }, {
                    id:'admin_logoperate',//admin_logo_perate
                    label: '操作日志',
                    linkUrl:'/admin/operate',
                    hightline:false,
                    needinit:false

                }]
            }],
            distreeData:[]
        };
    },
    created() {
        this.initPropt();
        this.treeData.forEach(m=>{
            m.children&&m.children.forEach(ms=>{
                if(this.$router.history.current.fullPath.indexOf(ms.linkUrl)>-1){
                    ms.hightline =true;
                }
            })
        });
        this.initAuth();
    },
    methods: {
        initAuth(){
            let _this = this;
            _.ajax({
                url: '/user/getuserinfo',
                method: 'POST',
                success: function (res) {
                    //console.log("----------------",res);
                    let _menus = res.menus?res.menus:[];
                    let reduceMenus =[];
                    _this.treeData.forEach(m=>{
                        let subMenus=JSON.parse(JSON.stringify(m));
                        subMenus.children=[];
                        m.children&&m.children.forEach(ms=>{
                            _menus.forEach(mns=>{
                                let menusid =mns.split(':')[2];
                                if(menusid ==ms.id){
                                    if(subMenus.children.indexOf(ms)==-1){
                                        subMenus.children.push(ms);
                                    }

                                }
                            });
                        });
                        if(subMenus.children.length>0){
                            reduceMenus.push(subMenus);
                        }
                    });
                    _this.distreeData = reduceMenus;
                }
            },'withCredentials');
        },
        initPropt(){
            let _this = this;
            _.ajax({
                url: '/admin/common/prompt',
                method: 'POST',
                success: function(result) {
                    _this.treeData.forEach(m=>{
                        m.children&&m.children.forEach(ms=>{
                            (typeof(result.data)=="object")&&result.data.forEach(res=>{
                                if(ms.id == res.permission.split(':')[2]){
                                    ms.needinit =true;
                                }
                            })
                        })
                    });
                }
            }, 'withCredentials');
        },
        handleNodeClick(data) {
            // console.log("data----55555555555555---------------","-=-=-=-=-=--=-");

            /*刷新关闭详情的时候做提示保存数据*/
            window.onbeforeunload = function (e) {
            }

            this.removeAllHightLine();
            let tickPoint =data.id.split('_');
            if(tickPoint.length>2){
                this.$router.push(data.linkUrl);
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
            });
        },
        removeHightline(params){
            this.$nextTick(function () {
                document.querySelector('#'+params).parentNode.className = 'el-tree-node__content';
            });
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