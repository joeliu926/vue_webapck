<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .customer-content {
        padding: 0;
        .cursorPointer {
            cursor: pointer;
            color: #6f61d4 !important;
        }

        .customers-search-content {
            width: 100%;
            height: 74px;
            padding: 30px 0;
        }

        .customers-search {
            margin: 0 auto;
            width: 50%;
            .el-input__icon {
                left: 0;
            }
            .el-input__icon + .el-input__inner {
                padding-left: 35px;
            }
            .el-tabs__header {
                border: none;
            }
            .el-tabs__item {
                color: white;
                margin-right: 30px;
                height: 25px;
                padding: 0 20px;
                line-height: 23px;
            }
            .el-tabs__item.is-active {
                background-color: #ffffff;
                color: #000000;
                border-radius: 20px 20px 20px 20px !important;
            }
        }
        .customer-block-content {
            margin: 24px;
            border: 1px solid #fff;
            background-color: #ffffff;
            th div {
                font-size: 14px;
                color: #333333;
            }

            table tr td:last-child {
                text-align: right;
            }
            .customer-pa-icon {
                font-size: 16px !important;
                color: #909090;
                line-height: 30px;
                cursor: pointer;
                text-align: right;
            }
            .customer-title {
                border-radius: 30px;;
                vertical-align: middle;
                height: 40px;
                width: 40px;
            }
            .customer-date {
                /*float: right;*/
                text-align: right;
            }
            .el-table__body .el-table__row td {
                height: 60px;
                p, div {
                    font-size: 14px;
                    color: #999999;
                }
            }
            .eye-img{
                cursor: pointer;
                margin-left:5px;
            }
        }

        .customer-block-uinfo {
            margin: 24px;
            height: 32px;
            .customers-name {
                color: #333333;
                font-size: 16px;
            }
            .customer-record {
                color: #666666;
                font-size: 12px;
            }
            .customer-icon {
                cursor: pointer;
                padding-left: 0px !important;
            }
            .c-icon {
                text-align: left;
            }

        }

        .customer-user-name {
            font-size: 11px;
            color: #444;
        }

        .customer-user-title {
            vertical-align: middle;
            height: 40px;
            width: 40px;
        }

        .customer-pagination-align {
            text-align: right;
            border: none;
        }

        .customer-content-gradient {
            background: -moz-linear-gradient(360deg, #7084f3, #7a71fe);
            background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#7084f3), to(#7a71fe));
            background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
            background: -o-linear-gradient(360deg, #7084f3, #7a71fe);
        }
    }
</style>