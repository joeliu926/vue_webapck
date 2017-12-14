<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">


.triage-content{
    margin: 24px;
    .content-border{
            padding: 0px 24px;

            .el-tabs__nav{
                .is-active{

                    box-sizing: border-box;
                }
            }

        .el-tabs__header{
                background-color: #ffffff;
                margin:0px;
                .el-tabs__nav-wrap{
                    margin-bottom: -3px;
                }
            }
    }

    .content-list{
        .content-left-border{
            border-radius:4px;
        }
    }

    .triage-block-content {
        margin :2px;
        border: 1px solid transparent;
        background-color: #ffffff;
    th div{
        font-size: 14px;
        color: #333333;
    }

    table tr td:last-child {
        text-align: right;
    }
    .triage-pa-icon {
        font-size: 16px !important;
        color: #909090;
        line-height: 30px;
        cursor: pointer;
        text-align: right;
    }
    .triage-title {
        border-radius: 30px;;
        vertical-align: middle;
        height: 40px;
        width: 40px;
    }
    .triage-date {
        /*float: right;*/
        text-align: right;
    }
    .el-table__body .el-table__row td{
        height: 60px;
    p,div{font-size: 14px;color: #999999;}
    }
    }

    .triage-block-uinfo {
        margin: 24px;
        height: 32px;
    .triage-name {
        color: #333333;
        font-size: 16px;
    }
    .triage-record {
        color: #666666;
        font-size: 14px;
    }
    .triage-icon{
        cursor: pointer;
    }
    .c-icon{text-align: center;}

    }

    .triage-user-name {
        font-size: 11px;
        color: #444;
    }

    .triage-user-title {
        vertical-align: middle;
        height: 40px;
        width: 40px;
    }

    .triage-pagination-align {
        margin-bottom: 20px;
        text-align: right;
        border: none;
    }

    .customer-content-gradient {
        background: -moz-linear-gradient(360deg, #7084f3, #7a71fe);
        background: -webkit-gradient(linear,0 50%,100% 50%,from(#7084f3),to(#7a71fe));
        background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
        background: -o-linear-gradient(360deg, #7084f3, #7a71fe);
    }
}

</style>