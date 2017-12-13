<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .consult-dashboard-ct{
        clear: both;
        width: 100%;
        box-sizing: border-box;
        padding: 24px;
        .consult-content {
            .el-tabs__nav{
                .is-active{
                    border-top:2px solid #9083ED !important;
                    box-sizing: border-box;
                }
            }
            .eye-img{
                vertical-align: middle;
                cursor: pointer;
            }
            .el-tabs__header{
                background-color: #ffffff;
                .el-tabs__nav-wrap{
                    margin-bottom: -3px;
                }
            }

            .el-col-18{width: 100%;}
            .waiting-ct{
                width: 100%;
                .waiting-handle{
                     padding: 12px 0;
                    .add-consult{
                        text-align: right;
                    }
                    .today-count{
                        font-size: 14px;
                        color:#999999;
                        padding: 0 0 12px 0 ;
                        .p-count{
                            font-size: 16px;
                            color:#333333;
                            margin-left: 30px;
                        }
                    }
                    .des{
                        padding: 0px;
                    }
                }


            }
        }

        .customer-table{
            color: #999999;
            width:100%;
            border: 1px solid #eaeaea;
            th{
                background-color: #F7F7F7;
                padding: 10px 24px;
                font-size: 16px;
                color: #333333;
            }
            tr{
                width: 100%;
            }
            tr.tr-end{
                border-bottom: 1px solid #eaeaea;
            }
            td{
                padding: 10px 24px;
                font-size: 14px;

                .start-cst-btn{
                    background: #9083ED;
                    color: #ffffff;
                    border-color: #9083ED;
                }
                .start-cst-btn:hover{
                    border-color: #9083ED;
                }
            }
            .day-ct{
                border-top:1px solid #eaeaea;
                padding: 10px 24px;
                font-size: 14px;
                width: 100%;
                .idate{

                }
                .icount{
                    margin-left: 24px;
                    color:#666666;
                }
            }
        }
        .customer-waiting-content{
            margin: 24px 12px;
        }
        .customer-pagination-align {
            text-align: right;
            border: none;
            margin: 10px 0;
        }
    }



</style>