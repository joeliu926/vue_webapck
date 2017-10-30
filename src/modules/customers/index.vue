<template src="./template.html"></template>
<script src="./index.js">

</script>
<style  lang="scss">
    .customer-content{
        padding: 0 0;
    }
    .customers-search-content{
        width: 100%;
        height: 74px;
        padding: 30px 0;
    }
    .customers-search{
        margin: 0 auto;
        width:50%;
        .el-input__icon{
            left: 0;
        }
        .el-input__icon+.el-input__inner{
            padding-left: 35px;
        }
        .el-tabs__header{
            border: none;
        }
        .el-tabs__item{
            color: white;
            margin-right:30px;
            height: 26px;
            padding: 0 20px;
            line-height: 26px;
        }
        .el-tabs__item.is-active{
            background-color: #ffffff;
            color: #000000;
            border-radius: 20px 20px 20px 20px !important;
        }
    }

    .customer-block-content{
        margin:24px;
        border:1px solid #eeeeee;
        table tr td:last-child{
            text-align: right;
        }
        .customer-pa-icon{
            font-size: 24px !important;
            color: #909090;
            line-height: 30px;
            cursor: pointer;
        }
        .customer-title{
            vertical-align: middle;
            height: 40px;
            width: 40px;
        }
        .customer-date{
            float: right;
        }
    }

    .customer-block-uinfo{
        margin: 24px;
    }
    .customer-user-name{font-size: 11px;color:#444;}
    .customer-user-title{
        vertical-align: middle;
        height: 40px;
        width: 40px;
    }

    .customer-pagination-align{
        text-align: right;
    }
    .customer-content-gradient{
        background: -moz-linear-gradient(left,#534CE7 0%, #674CE7 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#534CE7), color-stop(100%,#674CE7));
        background: -webkit-linear-gradient(top,#534CE7 0%,#674CE7 100%);
        background: -o-linear-gradient(left,#534CE7 0%,#674CE7 100%);
        background: -ms-linear-gradient(left,#534CE7 0%,#674CE7 100%);
        background: linear-gradient(to right,#534CE7 0%,#674CE7 100%);
    }
</style>