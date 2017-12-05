<template src="./template.html"></template>

<script src="./index.js">

</script>

<style lang="sass">

    .case-top{
        text-align:center;background-color: #7084f3;
        line-height: 60px;
        height: 136px;
        color: white;
        box-sizing: border-box;
    }
        .case-top-demo{
        margin-top:38px;
    }
        .top-img{
        width:60px;height:60px
    }
        .search{
        margin-left:1.67%;
        width:98%;
        overflow: hidden;
        background:#fff;
    }
        .case-left{
        float:left;
        width:11.5%;
        margin-left: 4px;
        margin-top:20px;
        //border:1px solid grey;
        border-radius: 4px;
    }
        .box-shadow{
        -moz-box-shadow: 2px 2px 10px 2px #e8e8e8;
        -webkit-box-shadow:  2px 2px 10px 2px #e8e8e8;
        box-shadow: 2px 2px 10px 2px #e8e8e8;
        border-radius: 4px;
    }
        .case-left a{
            display: inline-block;
            line-height: 50px;
            height:60px;
            width:100%;
            font-size: 14px;
            text-align: center;
            background: white;
            color: #333;
            text-decoration:none;

    }
        .case-left .cur{
            background: #9083ed;
            color: #fff;
    }
        .case-right{

        width:92%;
        margin-bottom:20px;
            margin-top:6px;
        margin-left:1.67%;
        margin-right:1.67%;
        //border:1px solid grey;
        padding:20px 1.67%;
        border-radius: 4px;
        background:white
    }
        .case-left-col{
        text-align:left;
        margin-top:0px;
        padding:5px;
    }
        .case-right-row{}
        .el-col el-col-4{
        margin-top:20px;
    }
        .case-right-col{
        margin-left: 8px  ;
        margin-right: 8px;
        }
        .case-right-col a{
        display: inline-block;
        text-align: center;
        float:left;
        font-size: 14px;
        background: white;
        color: #333;
        text-decoration:none;
            padding:8px 16px 8px 16px;
    }
        .changecol:hover{
            color: white;
            font-size:14px;
            border-radius: 25px;
            background: #9083ed;
            padding:8px 16px 8px 16px;
    }
    .case-content{
    font-family: " 微软雅黑";


    }
    .case-title
    {font-family: "Helvetica Neue";
    font-weight:bold;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
    }
    }

</style>
