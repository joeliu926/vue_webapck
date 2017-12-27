import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {

            smalllist:[],//已选择项目列表
            product: [],//总的项目列表
            changestyle:1001,//左侧样式控制
        };
    },
    created() {
        let _This=this;
        document.querySelector('body').onscroll = function() { _This.onscorllevent() };
        this.getdata();
        this.getProductModel();
       // this.forshow();
        //this.fortask();
    },
    mounted(){
    },
    methods: {

       /* 全选*/
        selectall(params){
            let _This = this;
            let   productids=[];
            let hasselect=0;
            params.productList.forEach(function(item1){
                productids.push(item1.id);
            });
          //  console.log("ididididaaaaaaa====>",productids);
            let Ids=productids;
            let uid= _This.$route.params.id;
            let hasselected=hasselect;
            let postData = {
                id: uid,
                objValues:JSON.stringify({productIds:Ids,
                    status:hasselected,loginName:''})
            };
            _.ajax({
                url: '/admin/product/select',
                method: 'POST',
                data: postData,

                success: function (result) {
                   // console.log('select.data',result);
                    if (result.code == 0 && result.data) {
                        _This.getdata();
                    }else {

                    }
                }
            }, 'withCredentials');
            this.getdata();
        },
       /* 选择一个*/
        selectone(select){
            let _This = this;
            let   productids=[];
            let hasselect=0;
            let id=select.id;
            this.smalllist.forEach(function(item1){
                item1.productList.forEach(  function(item2){
                    item2.productList.forEach( function(item3){
                        if(item3.productCode==select.productCode) {
                            return hasselect = 1;
                        };

                    })
                })
            });
            productids.push(id);
           let Ids=productids;
            let uid= _This.$route.params.id;
            let hasselected=hasselect;
            let postData = {
                id: uid,
                objValues:JSON.stringify({productIds:Ids,
                    status:hasselected,loginName:''})
            };
            _.ajax({
                url: '/admin/product/select',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _This.getdata();
                    }else {

                    }
                }
            }, 'withCredentials');
        },
        /*获取选中的样式*/
        getClass(params){
            let hascur = false;
            this.smalllist.forEach(function(item1){
                item1.productList.forEach(  function(item2){
                    item2.productList.forEach( function(item3){
                        if(item3.productCode==params.productCode) {
                            return hascur = true;
                        }})
                })
            });
            if(hascur){
                return 'changecol';
            } else{
                return 'cur1';
            }},
        getProductModel(){
            let _This = this;
            let uid= _This.$route.params.id;

            let postData = {
                id: uid
            };
            _.ajax({
                url: '/admin/product/getProductModel',
                method: 'POST',
                data: postData,

                success: function (result) {
                    //console.log('getProductModel.data',result);
                    if (result.code == 0 && result.data) {
                        _This.product = result.data;
                    }else {

                    }
                }
            }, 'withCredentials');
        },
        getdata(){
            let _This = this;
            let uid= _This.$route.params.id;

            let postData = {
                id: uid
            };
            _.ajax({
                url: '/admin/product/list',
                method: 'POST',
                data: postData,

                success: function (result) {
                    // console.log('list.data',result);
                    if (result.code == 0 && result.data) {
                        _This.smalllist = result.data;
                    }else {

                    }
                }
            }, 'withCredentials');
        },
       /* 左侧选项控制右侧界面*/
        setscroll(params){
            var distop=""+params; 

            var  disTop=document.getElementById(distop).offsetTop;

            document.documentElement.scrollTop=disTop-132;
            this.changestyle=params;

        },
        /*滚动替换左侧选项*/
        onscorllevent(){
            this.product.forEach(m=>{

                var disTop=document.getElementById(m.productCode).offsetTop;

                var scrolltop = document.documentElement.scrollTop;

                if(disTop<scrolltop+350&&disTop>scrolltop-350){
                    this.changestyle=  m.productCode;
                }
            })
        },
    }
    }