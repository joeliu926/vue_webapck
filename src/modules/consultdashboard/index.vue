<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .consult-dashboard-ct{
        clear: both;
        width: 100%;
        padding: 24px;
        box-sizing: border-box;
        .consult-content {
.el-tabs__nav{
    .is-active{
        border-top:2px solid #9083ED !important;
        box-sizing: border-box;
    }
}
            .el-tabs__nav-wrap{
                margin-bottom: -3px;
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
                        td{
                            padding: 10px 24px;
                            font-size: 14px;
                            .eye-img{
                                vertical-align: middle;
                                cursor: pointer;
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
                .customer-tb-div{
                    box-sizing: border-box;
                    .td-item{
                        display: inline-block;
                        width: 14%;
                        box-sizing: border-box;
                        padding: 10px 24px;
                        font-size: 14px;
                        text-align: center;
                    }
                }

            }
        }
        .customer-pagination-align {
            text-align: right;
            border: none;
            margin: 10px 0;
        }
    }



</style>