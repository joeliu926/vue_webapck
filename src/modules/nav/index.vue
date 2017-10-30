<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    html,body{
        background-color: #f7f7f7;
    }
    .nav-content{
         line-height: 60px;
         height: 60px;
         color: white;
         box-sizing: border-box;
         padding: 0 30px;
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
        .nav-logo:before{
            content: url("../../common/img/logo.png");
            position: relative;
            top: 5px;
            right: 10px;
        }
    }



    .nav-user-img{
        height: 40px;
        width: 40px;
    }
    .nav-img-content{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        float: right;
        border: 1px solid #eaeaea;
        position: relative;
        top:10px;
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