<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .nav-admin-content{
         line-height: 60px;
         height: 60px;
         overflow: hidden;
         color: white;
         box-sizing: border-box;
         padding: 0 0 0 10px;
        .el-col:first-child{
            text-align: left;
        }
        >.el-col:last-child{
            text-align: right;
        }
        .el-col:nth-child(2){
            text-align: center;
        }
        .el-dropdown-link{
            color: white;
            font-size: 16px;
        }
        .nav-back-icon{
            font-size: 24px;
            margin-right: 20px;
            text-align: right;
        }
        .nav-home-icon{
            font-size: 30px !important;
            margin-right: 25px;
            text-align: right;
        }
        .nav-logo{
          margin-left: 30px;
        }
        .nav-text{
            line-height: 40px;
            height: 40px;

            vertical-align: super;
        }
        .nav-logo:before{
            content: url("../../../common/img/logo.png");
            position: relative;
            top: 5px;
            right: 10px;
        }
        .nav-select-list{
            cursor: pointer;
        }
        .nav-user-img{
            height: 40px;
            width: 40px;
            border-radius: 30px;
        }
        .nav-img-content{
            border-radius: 50%;
            height: 40px;
            width: 40px;
            float: right;
            position: relative;
            top:10px;
        }
        .nav-back-img{
            height: 60px;
            width: 60px;
            box-sizing: border-box;
            float: right;
            vertical-align: middle;
            margin-left: 20px;
            padding: 17px;
            cursor: pointer;
        }
        .nav-back-img:hover{
            background:#524DA7;
        }
    }
    .nav-content-gradient{
        background: -moz-linear-gradient(left, #4962D4 0%, #4F3CCA 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4962D4), color-stop(100%,#4F3CCA));
        background: -webkit-linear-gradient(top, #4962D4 0%,#4F3CCA 100%);
        background: -o-linear-gradient(left, #4962D4 0%,#4F3CCA 100%);
        background: -ms-linear-gradient(left, #4962D4 0%,#4F3CCA 100%);
        background: linear-gradient(to right,#4962D4 0%,#4F3CCA 100%);
    }
</style>