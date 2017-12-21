/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {};
    },
    created() {
        let postData = {
            faceId:""
        };
        _.ajax({
            url: '/clinic/test',
            method: 'POST',
            data: postData,
            success: function (result) {
                console.log("test--------", result);


            }
        }, 'withCredentials');
    },
    mounted(){
        let currentCity="";

        var map = new BMap.Map("map-content");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        //  map.centerAndZoom("北京",12);
        function myFun(result){
            var cityName = result.name;
            console.log("result----------->",result.center);
            let lat=result.center.lat;
            let lng=result.center.lng;
            point = new BMap.Point(lng,lat);
            map.centerAndZoom(point,12);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);







        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }

        // 初始化地图,设置城市和地图级别。

        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {"input" : "suggestId"
                ,"location" : map
            });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });

        function setPlace(){
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果

                console.log("pp-------->",pp);

                map.centerAndZoom(pp, 18);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            console.log("myValue--------->",myValue);
            local.search(myValue);
        }
    },
    destroyed() {

    },
    methods: {
        fEditClinic(){
            this.$router.push("/admin/clinic/edit");
        }
    },
    watch: {}
}